import { useDispatch } from "react-redux"
import { deleteResult, setResults, addResult } from '../features/results/resultSlice'
import { useEffect } from "react"

export const useResultFunctions = () => {

const dispatch = useDispatch()

useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://localhost:4000/api/results')
      const json = await response.json()

      if(response.ok) {
        dispatch(setResults(json))
      }
    }
    fetchResults()
}, [])

const deleteRes = async (resultId) => {
    const response = await fetch('http://localhost:4000/api/results/' + resultId, {
        method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch(deleteResult(json))
    }
    
}

const addRes = async (newResult) => {
    const response = await fetch('http://localhost:4000/api/results', {
      method: 'POST',
      body: JSON.stringify(newResult),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok) {
      console.log(json.error)
    }
    if(response.ok) {
      console.log("new result added", json)
      dispatch(addResult(json))
    }
}
    
    return { addRes, deleteRes, setResults }

}