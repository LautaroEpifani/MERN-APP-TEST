import './styles.css'
import close from '../../assets/close.png'
import { useSelector } from 'react-redux'
import  { useResultFunctions } from '../../../hooks/useResultFunctions'

const Results = () => {

  const results = useSelector(state => state.results)
  const { deleteRes } = useResultFunctions()

  return (
    <div className='container'>
      <h3>saved</h3>
      <div className="container-results">
        {
          results && results.slice(0,10).map(result => (
          <div key={result._id} className='results'>  
            <p>{result.quantity + " " + result.units + " " + "→" + " " + result.newQuantity + " " + result.newUnits}</p>
            <img onClick={() => deleteRes(result._id)} src={close} alt="" />
          </div>  
          ))
        }
      </div>  
    </div>
  )
}

export default Results