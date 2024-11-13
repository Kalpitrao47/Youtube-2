import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ButtonsList from './ButtonsList';
import Category from './Category';
import { Category_Api } from '../Utils/constants/constants';
import { Link, useSearchParams } from 'react-router-dom';

const CategoryContainer = () => {
  const [category, setCategory] = useState([])
  console.log("🚀 ~ CategoryContainer ~ category:", category)
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const videoId = searchParams.get("v")
  console.log("🚀 ~ CategoryContainer ~ videoId:", videoId)

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


  useEffect(() => {
    getCategory(videoId);
  }, [videoId])

  const getCategory = async (videoId) => {
    try {
      const response = await fetch(Category_Api(videoId));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setCategory(json.items);
    } catch (err) {
      console.error("🚀 ~ getVideos ~ error:", err);
      setError(err.message);
    }
  };

  return (
    <div>
      <div className='flex items-center'>
        <div className='rounded-full h-7 w-7 ml-2 bg-black text-white' onClick={handleScrollLeft}><KeyboardArrowLeftIcon /></div>
        <div><ButtonsList buttonsRef={buttonsRef} /></div>
        <div className='rounded-full h-7  w-7 bg-black text-white' onClick={handleScrollRight}><KeyboardArrowRightIcon /></div>
      </div>
      {/* <div className='min-h-[54rem] overflow-auto'>
        <Category category={category} />
      </div> */}
      <div className='h-[50rem] grid grid-cols-3 gap-4 p-5 md:grid-cols-4 lg:grid-cols-5'>
        {category.map((category) => {
          return (
            <Link key={category.id} to={`/watch?v=${category.id.videoId}`}>
            <Category id={category.id} category={category} />
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CategoryContainer