import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YouTube_Search_Api } from '../Utils/constants/constants';

const Head = () => {
  // const [toggleMenu, setToggleMenu] = useState(false)
  // console.log("🚀 ~ Head ~ toggleMenu:", toggleMenu)
  const dispatch = useDispatch()
  const [searchText,setSearchText] = useState("")
  console.log("🚀 ~ Head ~ searchText:", searchText)
  const [suggestions,setSuggestions] = useState([])
  console.log("🚀 ~ Head ~ suggestions:", suggestions)

  const toggleMenuHandler = () => {
    // setToggleMenu(!toggleMenu)  //Method Using State
    // console.log("toggle clicked");
    dispatch(toggleMenu());       //Method Using Redux Toolkit
  }

  return (
    <div className='flex items-start justify-between sticky top-0 bg-white z-10'>
      
      <div className='flex gap-5 '> 
        <MenuIcon fontSize='medium' className='mt-5 cursor-pointer' 
        // onClick={toggleMenuHandler} 
        onClick={()=>toggleMenuHandler() }
        />
        <img className='w-28 cursor-pointer' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt='Youtube_Logo' />
      </div>

      <div className='w-1/2'>
      <div className="mt-4  border border-gray-400 rounded-3xl flex justify-between">
        <input type="search" className="w-full rounded-l-3xl p-2" value={searchText} name="s" placeholder="Search..." onChange={(e)=>setSearchText(e.target.value)} />
        <button type="submit" className="bg-slate-200 rounded-r-3xl p-2 w-20" name="submit"><SearchIcon fontSize='small' /></button>
      </div>

     
      </div>
      

      <div className='flex gap-5 mt-2'>
        <div className='mt-5'>   
          <NotificationsIcon fontSize='medium' />
        </div>

        <div className='mt-5'>
          <PersonIcon fontSize='medium' />
        </div>
      </div>
    </div>
  )
}

export default Head


// Hamburger Menu
// Youtube Logo
// Search
// Notifications Icon
// Profile Logo