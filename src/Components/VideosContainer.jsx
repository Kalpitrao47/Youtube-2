import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants/constants'
import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

const VideosContainer = () => {
    const [videos, setVideos] = useState([])
    // console.log("🚀 ~ VideosContainer ~ videos:", videos)

    useEffect(() => {
        getVideos();
    }, [])
  
    const getVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_VIDEOS_API);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setVideos(json.items);
        } catch (err) {
            console.error("🚀 ~ getVideos ~ error:", err);
        }
    };

    return ( 
        <div className='h-[50rem] grid grid-cols-3 gap-4 p-5 md:grid-cols-4 lg:grid-cols-5'>
            {videos[0] && <AdVideoCard videos={videos[0]}/>}  
            {videos.map((video) => {
                return (  
                    <Link key={video.id} to={`/watch?v=${video.id}`}>
                        <VideoCard id={video.id} videos={video}/>
                    </Link>
                );
            })}
        </div>

    )
}

export default VideosContainer