import React,{useContext} from 'react'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../../App'

const PrivateRoutes = ({user,children}) => {
  
 
    if(user){
        return(
            <>{!children ? <Outlet/> :children}</>
        )
    }
    else{
        return <Navigate to="/login"/>
    }

}

export default PrivateRoutes