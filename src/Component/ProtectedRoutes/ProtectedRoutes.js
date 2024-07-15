import React from 'react'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoutes = ({user,children}) => {

  if(user && user?.type==='admin'){
    return <>{!children? <Outlet/> :children}</>
    
  }
  if(user){
    return <Navigate to="/"/>
  }
  if(!user){
    return <Navigate to="/signUp"/>
  }
  return(
    <div>ProtectedRoutes</div>
  )

 
}

export default ProtectedRoutes