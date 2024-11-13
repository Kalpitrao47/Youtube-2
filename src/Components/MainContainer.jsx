import React, { useRef } from 'react'
import ButtonsList from './ButtonsList'
import VideosContainer from './VideosContainer'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MainContainer = ({category}) => {
console.log("🚀 ~ MainContainer ~ category:", category)

  const buttonsRef = useRef(); 
  const handleScrollRight = () => {
    if (buttonsRef.current) {
      buttonsRef.current.scrollLeft += 200;  
    }
  };       
  const handleScrollLeft = () => {     
    if (buttonsRef.current) {
      buttonsRef.current.scrollLeft -= 200;  
    }
  };     

  return (
    <div>
      <div className='flex items-center'>
        <div className='rounded-full h-7 w-7 ml-2 bg-black text-white' onClick={handleScrollLeft}><KeyboardArrowLeftIcon /></div>
        <div><ButtonsList buttonsRef={buttonsRef}/></div>
        <div className='rounded-full h-7  w-7 bg-black text-white'  onClick={handleScrollRight}><KeyboardArrowRightIcon /></div>
      </div>
      <div className='min-h-[54rem] overflow-auto'>
        <VideosContainer />
      </div>
    </div>
  )
}

export default MainContainer

// ButtonList
// VideosContainer