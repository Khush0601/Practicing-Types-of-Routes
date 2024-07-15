import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../App'
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const {user,setUser}=useContext(UserContext) 
  const onLogOut=() =>{
    localStorage.removeItem('user')
    setUser(undefined)
  }
  return (
    <header className='app-header'>
    <img  style={{marginLeft:"10px"}} alt='logo'/>
    <div className='header-nav' >
      <NavLink className={({isActive}) => isActive && 'selected'} to='home' style={{marginRight:"10px"}}>Home</NavLink>
      <NavLink className={({isActive}) => isActive && 'selected'} to="about" style={{marginRight:"10px"}}>About</NavLink>
      <NavLink className={({isActive}) => isActive && 'selected'} to="contact" style={{marginRight:"10px"}}>Contact</NavLink>
     
      {
        user?.type==='admin' && 
        <NavLink className={({isActive}) => isActive && 'selected'} to="admin" style={{marginRight:"10px"}} >
        Admin
        </NavLink>
      }

      {
      user && <>
       <NavLink className={({isActive}) => isActive && 'selected'} to="login" style={{marginRight:"10px"}}>Login</NavLink>
       <NavLink className={({isActive}) => isActive && 'selected'} to="tshirt" style={{marginRight:"10px"}}>Tshirt</NavLink>
       <NavLink className={({isActive}) => isActive && 'selected'} to="dress" style={{marginRight:"10px"}}>Dress</NavLink>
       <NavLink className={({isActive}) => isActive && 'selected'} to="shirt" style={{marginRight:"10px"}}>Shirt</NavLink>
      <LogoutIcon onClick={onLogOut}/>
       </>
      }
    </div>
   </header>
  )
}

export default Navbar