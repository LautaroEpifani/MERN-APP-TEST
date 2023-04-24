import React from 'react'
import './styles.css'
import arrows from '../../assets/arrows.png'

const NavBar = () => {
  return (
  <div className="container-border">
    <div className="container-nav">
        <div className='nav'>
            <img className="nav-img" src={arrows} alt="" />
            <div className="nav-title">unit converter</div>
        </div>
    </div>
   </div>   
  )
}

export default NavBar