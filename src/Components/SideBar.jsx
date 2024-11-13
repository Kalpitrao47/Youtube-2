import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MovieIcon from '@mui/icons-material/Movie';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { Link } from 'react-router-dom';
import MainContainer from './MainContainer';

const categories = [
    { id: 1, name: "Trending", icon: "WhatshotIcon" },
    { id: 2, name: "Shopping", icon: "LocalMallIcon" },
    { id: 3, name: "Music", icon: "AudiotrackIcon" },
    { id: 4, name: "Movies", icon: "MovieIcon" },
    { id: 5, name: "Shorts", icon: "PlayCircleIcon" },
    { id: 6, name: "Gaming", icon: "SportsEsportsIcon" },
    { id: 7, name: "News", icon: "NewspaperIcon" },
    { id: 8, name: "Sports", icon: "EmojiEventsIcon" },
    { id: 9, name: "Learnings", icon: "SchoolIcon" },
    { id: 10, name: "Fashion", icon: "CheckroomIcon" },
    { id: 11, name: "Podcasts", icon: "PodcastsIcon" }
  ];

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // First method Early Return 
    if (!isMenuOpen) return null;    //This Method is Called as early Return 
    //If isMenuopen is false then this wont go to return statement Below.
    // Second Method 
    // return !isMenuOpen ? null : (
 
    // )

    const iconMap = { 
        "WhatshotIcon": <WhatshotIcon fontSize="medium" />,
        "LocalMallIcon": <LocalMallIcon fontSize="medium" />,
        "AudiotrackIcon": <AudiotrackIcon fontSize="medium" />,
        "MovieIcon": <MovieIcon fontSize="medium" />,
        "PlayCircleIcon": <PlayCircleIcon fontSize="medium" />,
        "SportsEsportsIcon": <SportsEsportsIcon fontSize="medium" />,
        "NewspaperIcon": <NewspaperIcon fontSize="medium" />,
        "EmojiEventsIcon": <EmojiEventsIcon fontSize="medium" />,
        "SchoolIcon": <SchoolIcon fontSize="medium" />,
        "CheckroomIcon": <CheckroomIcon fontSize="medium" />,
        "PodcastsIcon": <PodcastsIcon fontSize="medium" />
      };

    

    
      
    return (   
        <div className='h-[54rem]  scrollbar w-min-52 flex flex-col gap-y-4 divide-y'>
            <Link to="/"><div className='flex gap-5 hover:bg-gray-200 items-center rounded-lg cursor-pointer'>
                <div >
                    <HomeIcon fontSize='medium' />
                </div>
                <div className='text-sm font-semibold'>
                    Home
                </div>
            </div></Link>
            <div className='flex gap-5 hover:bg-gray-200 items-center rounded-lg cursor-pointer'>
                <div>
                    <PlayCircleOutlinedIcon fontSize='medium' />
                </div>
                <div className='text-sm font-semibold text-gray-600'>
                    Shorts
                </div>
            </div>
            <div className='flex gap-5 hover:bg-gray-200 items-center rounded-lg cursor-pointer'>
                <div>
                    <SmartDisplayOutlinedIcon fontSize='medium' />
                </div> 
                <div className='text-sm font-semibold text-gray-600'>
                    Subscriptions
                </div>
            </div>

            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white text-start">Explore</h2>
            
            <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 text-start gap-y-4 divide-y">
      {categories.map((category) => (
        <li key={category.id} className="flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer">
          <Link to={`/category?v=${category.name}`}><div className='flex gap-5'>
          <div>{iconMap[category.icon]}</div>
          <div className="text-sm font-semibold text-gray-600">
            {category.name}
          </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>

            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white text-start hover:bg-gray-200 rounded-lg cursor-pointer">You {">"}</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 text-start gap-y-4 divide-y">
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <HistoryOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                        History
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <PlaylistPlayOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Playlist
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <OndemandVideoOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Your Videos
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <WatchLaterOutlinedIcon fontSize='medium' /> 
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Watch Later
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>   
                    <div>
                        <ThumbUpAltRoundedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Liked Videos
                    </div>
                </li>
            </ul>

            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white text-start">Subscriptions</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 text-start gap-y-4 divide-y">
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <HistoryOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'> 
                        History 
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <PlaylistPlayOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Playlist
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <OndemandVideoOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Your Videos
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <WatchLaterOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Watch Later
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 rounded-lg cursor-pointer'>
                    <div>
                        <ThumbUpAltRoundedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Liked Videos
                    </div>
                </li>
            </ul>

            



            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white text-start">Explore</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 text-start gap-y-4 divide-y">
                <li className='flex items-center gap-5 hover:bg-gray-200 cursor-pointer'>
                    <div>
                        <HistoryOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                        History
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 cursor-pointer'>
                    <div>
                        <PlaylistPlayOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Playlist
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 cursor-pointer'>
                    <div>
                        <OndemandVideoOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Your Videos
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 cursor-pointer'>
                    <div>
                        <WatchLaterOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Watch Later
                    </div>
                </li>
                <li className='flex items-center gap-5 hover:bg-gray-200 cursor-pointer'>
                    <div>
                        <ThumbUpAltRoundedIcon fontSize='medium' />
                    </div>
                    <div className='text-sm font-semibold text-gray-600'>
                    Liked Videos
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default SideBar