import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Contact from './Page/Contact/Contact'

import Navbar from './Component/Navbar/Navbar'
import PrivateRoutes from './Component/PrivateRoutes/PrivateRoutes'
import Admin from './Page/Admin/Admin'
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes'
import Tshirt from './Page/Tshirt/Tshirt'
import SignUp from './Page/SignUp/SignUp'
import Login from './Page/Login/Login'

export const UserContext=createContext()
const App = () => {
  const [user,setUser]=useState(undefined)

useEffect(()=>{
  let userData=JSON.parse(localStorage.getItem('user'));
  if(userData){
    setUser(userData)
  }
},[])
console.log('app user',user)

let userContextData={
  user:user,
  setUser:setUser,
}

  return (
    <UserContext.Provider value={userContextData}>
  <BrowserRouter>
    <div className='app'>
    <Navbar/>
     <section className='app-section'>
     <Routes>
      <Route index element={<h1>Landing Page</h1>} />
      <Route path='/home' element={<Home/>}>
        <Route index element={<h1>Home index</h1>}/>
        <Route path="/home/product" element={<PrivateRoutes user={user}><h1>Product component</h1></PrivateRoutes>}/>
        <Route path="/home/Order" element={<ProtectedRoutes user={user}><h1>Order component</h1></ProtectedRoutes>}/>
        <Route path="/home/privacy" element={<ProtectedRoutes user={user}><h1>Privacy comp</h1></ProtectedRoutes>}/>
      </Route>
    <Route path='/about' element={<About/>}>
       <Route index element={<h1>About container</h1>}/>
       <Route element={<PrivateRoutes user={user}/>}>
             <Route path='/about/shopping' element={<h1>Shopping List</h1>}/>
             <Route path='/about/Women' element={<h1>Women List</h1>}/>
             <Route path='/about/men' element={<h1>Men List</h1>}/>
       </Route>
      </Route>


      <Route path='/contact' element={<Contact/>}/>

      <Route path='/signUp' element={<SignUp setUser={setUser}/>}/>
      <Route path='/login' element={<Login setUser={setUser}/>}/>
      <Route path='/admin' element={<ProtectedRoutes user={user}><Admin/></ProtectedRoutes>}/>

      <Route element={<PrivateRoutes user={user}/>}>
       
        <Route path='/tshirt' element={<Tshirt/>}/>
        <Route path='/dress' element={<h1>dress</h1>}/>
        <Route path='/shirt' element={<h1>shirt</h1>}/>
      </Route>
    </Routes>
     </section>
    </div>

   

  </BrowserRouter>
  </UserContext.Provider>
  )
}

export default App