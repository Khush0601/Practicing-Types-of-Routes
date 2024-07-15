import React, { useState } from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import { Alert, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
const SignUp = ({setUser}) => {
    const [showPassword, setShowPassword] = React.useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);
   const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
    const [registerUser,setRegisterUser]=useState(
      {
        email:"",
        password:"",
        confirmPassword:"",
      }
    )
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    
    const registerUsers= async(e)=>{
       e.preventDefault()

     
      if(registerUser.email ==='' && registerUser.password ===''
       && registerUser.password !== registerUser.confirmPassword 
         ){
          return
        }
        try{
        const result=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsjRyK8_iYY5Gm03z8tJxtF1RamUX15YY',
        {
        email:registerUser.email,
        password:registerUser.password,
        })
        console.log(result)
       setUser(result)
        setError('')
        setSuccess('register success')

        }
        catch(e){
        console.log(e)
        setError(e.message)
        setSuccess('')

        }
    }

    const onInputChange=(e,type)=>{
      setRegisterUser((p)=>{
        return{...p,[type]:e.target.value}
      })
    }

    console.log(registerUser)

  return (
    <div className='signup-container'>
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
       <h5>Hey There Register your account</h5>
       <form onSubmit={registerUsers}>
        <div className='input-container'>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" value={registerUser.email} fullWidth onChange={(e)=>onInputChange(e,'email')}/>
        </div>
        <div className='input-container'>
        <FormControl sx={{  width: '52ch' }} variant="outlined" value={registerUser.password} onChange={(e)=>onInputChange(e,'password')} >
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
        <div className='input-container'>
        <TextField id="outlined-basic" type='password' label="confirm password" value={registerUser.confirmPassword} variant="outlined" fullWidth onChange={(e)=>onInputChange(e,'confirmPassword')}/>
        </div>
        <div className='input-container'>
        <Button variant="contained" type='submit'>Register</Button>
        </div>
       </form>

    </div>
  )
}

export default SignUp