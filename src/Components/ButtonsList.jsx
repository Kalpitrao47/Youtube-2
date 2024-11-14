import React from 'react'
import Buttons from './Buttons'

const ButtonsList = ({buttonsRef}) => {

  const buttonslist = ["All", "Gaming", "Videos", "Cricket", "Songs", "Gym", "Soccer", "Badminton", "All", "Gaming", "Videos", "Cricket", "Songs", "Gym", "Soccer", "Badminton", "All", "Gaming", "Videos", "Cricket", "Songs", "Gym", "Soccer", "Badminton"]

  return (
    <>
      <div ref={buttonsRef} className='flex gap-10 p-5 w-full max-w-[88vw] overflow-hidden'>
        {buttonslist.map((b) => {
          return (
            <Buttons name={b} />
          )
        })}
      </div>
    </>
  ) 
}

export default ButtonsList