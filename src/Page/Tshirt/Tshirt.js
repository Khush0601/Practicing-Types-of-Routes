import React, { useContext, useState } from 'react'
import './Tshirt.css'
import { UserContext } from '../../App'
const Tshirt = () => {
  const user = useContext(UserContext);
  console.log(user)
    const [isActive,setIsActive]=useState(false)
    const onMouseEnter=()=>{
        setIsActive(true)
    }
    const onMouseLeave=()=>{
        setIsActive(false)
    }
  return (
    <div className='tshirt-cont'>
      <div className={isActive ? 'card-active':'card'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className='card-two'></div>
      </div>
    </div>

  )
}

export default Tshirt