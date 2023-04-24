import React, { useState } from 'react'
import './styles.css'
import like from '../../assets/likeE.png'
import arrowsW from '../../assets/arrowsW.png'
import Results from '../Results/Results'
import { useResultFunctions } from '../../../hooks/useResultFunctions'

const Converter = () => {

  const [quantity, setQuantity] = useState(0)
  const [newQuantity, setNewQuantity] = useState(0)
  const [units, setUnits] = useState("km")
  const [newUnits, setNewUnits] = useState("miles")
  const newResult = {
      units,
      newUnits,
      quantity,
      newQuantity
  }

  const { addRes } = useResultFunctions()

  const handleChange = ({ target: { name, value } }) => {
      if(name === "quantity") {
        setQuantity(value ? value : 1)
        setNewQuantity(((value*0.621371).toFixed(2)))
      } else {
        const sp_value = value.split("_")
        setUnits(sp_value[0])
        setNewUnits(sp_value[1])
      }
     switch (value){
      case "km_miles": 
          setNewQuantity((quantity*0.621371).toFixed(2))
          break;
      case "miles_km": 
          setNewQuantity((quantity*1.609344).toFixed(2))
          break;
      case "feet_metres": 
          setNewQuantity((quantity*0.3048).toFixed(2))
          break;
      case "metres_feet": 
          setNewQuantity((quantity*3.28084).toFixed(2))
          break;
      case "cm_inches": 
          setNewQuantity((quantity*0.393701).toFixed(2))
          break;
      case "inches_cm": 
          setNewQuantity((quantity*2.54).toFixed(2))
          break; 
    };
  }

  const changeUnits = () => {
    setUnits(newUnits)
    setNewUnits(units)
    setQuantity(newQuantity)
    setNewQuantity(quantity)
  }

  return (
    <>
    <div className="converter">
      <h3 className="converter-title">convert</h3>
      <div className='converter-form'>
          <div className='container-select'>
            <div className="select" name="converter">
                <select onChange={handleChange} id="">
                  <option value="km_miles">km → miles</option>
                  <option value="miles_km">miles → km</option>
                  <option value="feet_metres">feet → metres</option>
                  <option value="metres_feet">metres → feet</option>
                  <option value="cm_inches">cm → inches</option>
                  <option value="inches_cm">inches → cm</option>
                </select>    
            </div>
            <img onClick={() => changeUnits()} className="arrows" src={arrowsW} alt="" />
          </div>
          <div className='container-quantity'>
            <input className="input" name="quantity" type="number" onChange={handleChange} value={quantity ? quantity : 0}/>
            <p>{units}</p>
          </div>
      </div>
      <div className='container-result'>
            <img onClick={() => addRes(newResult)} src={like} alt=""/>
            <div className='result'>
              <h3>{newQuantity}</h3>
              <p>{newUnits}</p>  
            </div>
      </div>
    </div>
    <Results/>
   </> 
  )
}

export default Converter