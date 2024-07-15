import React from 'react'
import './Home.css'
import { NavLink, Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-container'>
     <div className='home-content'>
         <Outlet/>
         </div>
     <div className='home-routes'>
        <NavLink className={({isActive})=> isActive && 'picked'} to='/home/product' style={{marginBottom:"10px"}}>Product</NavLink>
        <NavLink className={({isActive})=> isActive && 'picked'}to="/home/order/" style={{marginBottom:"10px"}}>Order</NavLink>
        <NavLink className={({isActive}) => isActive && 'selected'} to="/home/privacy" style={{marginRight:"10px"}}>Privacy</NavLink>
     </div>
         
    
    </div>
  )
}

export default Home