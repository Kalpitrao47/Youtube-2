import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import WatchPageSideBar from './WatchPageSideBar';
import { Video_Details_Api,  YOUTUBE_COMMENTS_API_2 } from '../Utils/constants/constants';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Comments from './Comments';
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  console.log("🚀 ~ WatchPage ~ videoDetails:", videoDetails)
  console.log("🚀 ~ WatchPage ~ comments:", comments)
  // console.log("🚀 ~ WatchPage ~ comments[0].snippet.topLevelComment.snippet:", comments[0].snippet.topLevelComment.snippet)
  console.log(searchParams.get("v"));

  const videoId = searchParams.get("v")
  console.log("🚀 ~ WatchPage ~ videoId:", videoId)



  useEffect(() => {
    getComments(videoId);
    getVideosDetails(videoId);
  }, [videoId])

   
  const getComments = async (videoId) => {
    try {
      const response = await fetch(YOUTUBE_COMMENTS_API_2(videoId));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setComments(json.items);
    } catch (err) {
      console.error("🚀 ~ getComments ~ error:", err);
      setError(err.message);
    }
  };



  const getVideosDetails = async (videoId) => {
    try {
      const response = await fetch(Video_Details_Api(videoId));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setVideoDetails(json.items);
    } catch (err) {
      console.error("🚀 ~ getVideosDetails ~ error:", err);
      setError(err.message);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1e6) {
        return `${(num / 1e6).toFixed(1)}M`; // Format as millions
    } else if (num >= 1e3) {
        return `${(num / 1e3).toFixed(1)}K`; // Format as thousands
    }
    return num; // Return the number as is if less than 1,000
};

const likeCount = videoDetails[0]?.statistics.likeCount;
const formattedLikeCount = formatNumber(likeCount);

const isMenuOpen = useSelector(store => store.app.isMenuOpen)  
console.log("🚀 ~ WatchPage ~ isMenuOpen:", isMenuOpen)
let isMenuClosed = !isMenuOpen
console.log("🚀 ~ WatchPage ~ isMenuClosed:", isMenuClosed)


// if (isMenuClosed) return null;


  return (
    <div className='flex px-5'>
      <div className='flex flex-col'>
        <div className='px-5 mt-5 flex'>
          <iframe width="1200" height="600" className='rounded-2xl min-w-full' src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='flex justify-start px-5 mt-5 text-3xl font-semibold'>
          {videoDetails[0]?.snippet?.title}   
        </div>
        <div className='flex justify-between px-5 mt-5'>
          <div className='flex gap-2'>
            <div className='h-10 w-10'>
              <img src='https://cdn-icons-png.flaticon.com/512/552/552721.png' alt='profileIcon' />
            </div>
            <div className='flex flex-col'>
              <div className='text-base font-semibold flex items-start'>{videoDetails[0]?.snippet?.channelTitle}</div>
              <div className='text-gray-500 text-xs'>241M SubScribers</div>
            </div>
            <div className='bg-gray-100 text-black w-36 h-12 rounded-full flex justify-center items-center'>
              <div><NotificationsActiveOutlinedIcon /></div> 
              <div><button>Subscribe</button></div> 
              <div><KeyboardArrowDownOutlinedIcon /></div>
            </div>
          </div>
 
          <div className='flex gap-5'>
            <div className='flex justify-center items-center'>
              <div className='bg-gray-100 rounded-l-full w-20 h-12 flex justify-center items-center'><ThumbUpOffAltIcon />  {formattedLikeCount}</div>
              <div className='bg-gray-100 rounded-r-full w-20 h-12 flex justify-center items-center'><ThumbDownOffAltIcon /></div>
            </div>
            <div className='bg-gray-100 w-20 h-12 rounded-full flex justify-center items-center'>
              <ReplyIcon />
              Share
            </div>
            <div className='bg-gray-100 w-36 h-12 rounded-full flex justify-center items-center'>
              <DownloadIcon />
              Download
            </div>
            <div className='bg-gray-100 w-20 h-12 rounded-full flex justify-center items-center'>
              <BookmarkBorderIcon />
              Save
            </div>
          </div>

        </div>

        <div className='bg-gray-100 rounded-2xl p-5 mt-5 text-start'>
          <div className='text-sm font-bold'>
            {videoDetails[0]?.statistics.viewCount} views 1 day ago
          </div>
          <div>
            {videoDetails[0]?.snippet?.localized.description}
          </div>
        </div>

        <div className='flex justify-start px-5 mt-5 font-semibold text-xl '>
          100 Comments
        </div>


        <div className='flex gap-5'>
          <div className='flex flex-col'>
            {comments.map((comments) => {
              return (
                <Comments comments={comments} />
              )
            })}

          </div>
        </div>

      </div>

      <div>
        <WatchPageSideBar />
      </div>

    </div>

  )
}

export default WatchPage