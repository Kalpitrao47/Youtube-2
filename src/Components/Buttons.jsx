import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='flex w-full h-8'>
    <div className='bg-gray-200 text-black font-semibold text-sm  p-2 rounded-md flex items-center cursor-pointer'>{name}</div>
</div>

  )
}

export default Buttons