import React from 'react'
import ButtonsList from './ButtonsList'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>     
      {/* <MainContainer/> */}
      <Outlet/>
    </div>
  )
}

export default Body 
 

// SideBar
// ButtonList
// Youtube Cards  