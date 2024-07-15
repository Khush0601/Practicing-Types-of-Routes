import React, { useState } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import {  Alert, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';


const Login = ({setUser}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
       event.preventDefault();
     }
 const [loginUser,setLoginUser]=useState(
    {
        email:"",
        password:"",
    }
 )
 const autoLogOut =() =>{
  setTimeout(()=>{
    localStorage.removeItem('user')
    setUser(undefined)
  },1000*60*2)
 }
 const onInputChanged=(e,type)=>{
    setLoginUser((p)=>{
        return {...p,[type]:e.target.value}
    })
 }
 const [error,setError]=useState('')
 const [success,setSuccess]=useState('')
 const navigate=useNavigate()
 const onLogin= async(e)=>{
    e.preventDefault()
    try{
    const result=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsjRyK8_iYY5Gm03z8tJxtF1RamUX15YY',
    {
        email:loginUser.email,
        password:loginUser.password,
    })
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result.data))
    setUser(result.data);
    setSuccess('login Success')
    autoLogOut()
    setTimeout(()=>{
        setSuccess('')
        setError('')
       navigate('/home') 
    },[1000])
    
    }
    catch(e){
      console.log('error',e)
      setError(e.message)
      setSuccess('')
      setTimeout(()=>{
        setError('')
      },[1000])
    }
 }

console.log(loginUser)
  return (
    <div className='login-container'>
         <>
      {
      error && <Alert variant="filled" severity="error">
      {error}
    </Alert>
      }
      {
        success && <Alert variant="filled" severity="success">
      {success}
      </Alert>
      }
      </>
      <h5>Hey There Login Your Accont</h5>
       <form onSubmit={onLogin} >
        <div className='login-input-container'>
        <TextField id="outlined-basic" label="Enter Email" value={loginUser.email} variant="outlined" onChange={(e)=>onInputChanged(e,'email')} fullWidth />
        </div>
        <div className='login-input-container'>
        <FormControl sx={{  width: '46ch' }} variant="outlined" value={loginUser.password} onChange={(e)=>onInputChanged(e,'password')} >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        <div className='login-input-container'>
        <Button variant="contained" type='submit'>Login</Button>
        <div><NavLink to ='/signUp' >Rgister</NavLink> Your accounts</div>
        </div>
       </form>
    </div>
  )
}

export default Login