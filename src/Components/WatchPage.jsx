import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import WatchPageSideBar from './WatchPageSideBar';
import { Video_Details_Api, YOUTUBE_COMMENTS_API_2 } from '../Utils/constants/constants';
import {
  ThumbUpOffAlt as LikeIcon,
  ThumbDownOffAlt as DislikeIcon,
  Reply as ShareIcon,
  Download as DownloadIcon,
  BookmarkBorder as SaveIcon,
  NotificationsActiveOutlined as NotifyIcon,
  KeyboardArrowDownOutlined as ArrowDownIcon
} from '@mui/icons-material';
import Comments from './Comments';
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const videoId = searchParams.get("v");

  useEffect(() => {
    if (videoId) {
      getComments(videoId);
      getVideosDetails(videoId);
    }
  }, [videoId]);

  const getComments = async (videoId) => {
    try {
      const response = await fetch(YOUTUBE_COMMENTS_API_2(videoId));
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setComments(json.items);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const getVideosDetails = async (videoId) => {
    try {
      const response = await fetch(Video_Details_Api(videoId));
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setVideoDetails(json.items);
    } catch (err) {
      console.error("Error fetching video details:", err);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
    return num;
  };

  const likeCount = videoDetails[0]?.statistics?.likeCount;
  const formattedLikeCount = formatNumber(likeCount);

  return (
    <div className='flex flex-col lg:flex-row p-4 gap-4'>
      <div className='flex flex-col flex-1'>
        <div className='w-full aspect-video'>
          <iframe
            className='w-full h-full rounded-2xl'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='mt-5 text-xl font-semibold'>
          {videoDetails[0]?.snippet?.title}
        </div>
        <div className='flex flex-wrap justify-between items-center mt-5'>
          <div className='flex items-center gap-2'>
            <img className='h-10 w-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/552/552721.png' alt='Profile' />
            <div>
              <div className='text-base font-semibold'>{videoDetails[0]?.snippet?.channelTitle}</div>
              <div className='text-gray-500 text-xs'>241M Subscribers</div>
            </div>
            <button className='bg-gray-100 text-black px-4 py-2 rounded-full flex items-center gap-2'>
              <NotifyIcon /> Subscribe <ArrowDownIcon />
            </button>
          </div>
          <div className='flex flex-wrap gap-3'>
            <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
              <LikeIcon /> {formattedLikeCount}
            </button>
            <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
              <DislikeIcon />
            </button>
            <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
              <ShareIcon /> Share
            </button>
            <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
              <DownloadIcon /> Download
            </button>
            <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
              <SaveIcon /> Save
            </button>
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-2xl mt-5 text-start'>
          <div className='text-sm font-bold'>
            {videoDetails[0]?.statistics?.viewCount} views · 1 day ago
          </div>
          <div className='text-sm'>
            {videoDetails[0]?.snippet?.localized?.description}
          </div>
        </div>
        <div className='mt-5 text-lg font-semibold text-start'>100 Comments</div>
        <div className='flex flex-col gap-4 mt-2'>
          {comments.map((comment, index) => (
            <Comments key={index} comments={comment} />
          ))}
        </div>
      </div>
      <WatchPageSideBar className='hidden lg:block w-1/3' />
    </div>
  );
};

export default WatchPage;
