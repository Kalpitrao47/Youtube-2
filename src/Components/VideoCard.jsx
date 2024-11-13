import React, { useState } from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useSearchParams } from 'react-router-dom';

const VideoCard = ({ videos, layout = 'col' }) => {
    // console.log("🚀 ~ VideoCard ~ videos:", videos)
    const snippet = videos?.snippet
    // console.log("🚀 ~ VideoCard ~ snippet:", snippet)
    const statistics = videos?.statistics
    // console.log("🚀 ~ VideoCard ~ statistics:", statistics)
    const title = snippet?.title
    // console.log("🚀 ~ VideoCard ~ title:", title)
    //   const {snippet,statistics} = videos;


    const youtubeVideo = document.getElementById('youtubeVideo');

    function showVideo() {
        youtubeVideo.style.display = 'block';
        youtubeVideo.src += "&autoplay=1"; // Ensure autoplay is enabled
    }

    function hideVideo() {
        youtubeVideo.style.display = 'none';
        youtubeVideo.src = youtubeVideo.src.replace("&autoplay=1", ""); // Remove autoplay to reset
    }

    const [isHovered, setIsHovered] = useState(false);
    const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

    return (
        <div 
        className={`flex ${layout === 'row' ? 'flex-row' : 'flex-col'} relative`} // Conditional class based on layout prop    
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative'>
        <img className='rounded-xl' src={snippet.thumbnails.medium.url} alt={title} />
        {/* {isHovered && 
        (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-xl'>
            <iframe width="480" height="360" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        )} */}
      </div>
      <div className='flex p-2 gap-4'>
        {layout === "row" ? null : <div>
          <img className='rounded-full h-10 w-10 object-cover' src={snippet.thumbnails.medium.url} alt={snippet.channelTitle} />
        </div>}
        <div className='flex flex-col'>
          <div className='text-start'>   
            
            <span className='text-base font-bold'>{title
              ? title.length <= 20
                ? title
                : `${title.substring(0, 20)}...`
              : ""}</span>
          </div>
          <div className='text-start text-sm font-semibold text-gray-500 gap-2'>
            {snippet.channelTitle}
            <CheckCircleRoundedIcon fontSize='small' />
          </div>
          <div className='text-start text-sm font-semibold text-gray-500'>
            {statistics.viewCount} Views . 1 Day Ago
          </div>
        </div>
      </div>
    </div>

    )
}


//Higher Order Function
// A Function which takes a Component and returns a new component  
// Ek Component ko Modify karke bhejege 

export const AdVideoCard = ({videos, layout = 'col'}) =>{
  return (
    <div className='border border-black rounded-xl'>
          <VideoCard videos={videos} layout={layout}/>

    </div>
  )
}

export default VideoCard