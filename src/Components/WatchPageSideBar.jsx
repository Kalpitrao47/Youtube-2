import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants/constants'
import ButtonsList from './ButtonsList'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';


const WatchPageSideBar = () => {
    const [videos, setVideos] = useState([])
    console.log("🚀 ~ VideosContainer ~ videos:", videos)

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
            setError(err.message);
        }
    };


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
            <div className='w-96 overflow-hidden flex items-center'>
                <div className='rounded-full h-7 w-7 ml-2 bg-black text-white' onClick={handleScrollLeft}><KeyboardArrowLeftIcon /></div>
                <div className='overflow-hidden w-[20rem]'><ButtonsList buttonsRef={buttonsRef} /></div>
                <div className='rounded-full h-7  w-7 bg-black text-white' onClick={handleScrollRight}><KeyboardArrowRightIcon /></div>
            </div>
            <div className='flex flex-col items-center'>
                {videos.map((video) => {
                    return (
                        <Link key={video.id} to={`/watch?v=${video.id}`}>
                            <VideoCard id={video.id} videos={video} layout="row gap-5" />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default WatchPageSideBar