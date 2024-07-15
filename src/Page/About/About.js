import React from 'react'
import './About.css'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div className='about-cont'>
      <div className='about-content'>
       <div className='about-left'>
        <Outlet/>
       </div>
       <div className='about-routes'>
        <NavLink className={({isActive})=>isActive && 'selected'} to="/about/shopping" style={{marginBottom:"10px",color:"black"}}>Shopping</NavLink>
        <NavLink className={({isActive})=>isActive && 'selected'} to="/about/women" style={{marginBottom:"10px",color:"black"}}>Women</NavLink>
        <NavLink className={({isActive})=>isActive && 'selected'} to="/about/men" style={{marginBottom:"10px",color:"black"}}>Men</NavLink>
       </div>
      </div>
    </div>
  )
}

export default About