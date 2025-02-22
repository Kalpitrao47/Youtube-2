import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const VideoCard = ({ videos, layout = 'col' }) => {
  const snippet = videos?.snippet;
  const statistics = videos?.statistics;
  const title = snippet?.title;
  const [isHovered, setIsHovered] = useState(false);
  const [searchParams] = useSearchParams();

  return (
    <div 
      className={`flex ${layout === 'row' ? 'flex-row' : 'flex-col'} relative`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        <img className="rounded-xl w-full" src={snippet?.thumbnails?.medium?.url} alt={title} />
        {isHovered && searchParams.get("v") && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="flex p-2 gap-4">
        {layout === "row" ? null : (
          <div>
            <img className="rounded-full h-10 w-10 object-cover" src={snippet?.thumbnails?.medium?.url} alt={snippet?.channelTitle} />
          </div>
        )}
        <div className="flex flex-col">
          <div className="text-start">
            <span className="text-base font-bold">
              {title ? (title.length <= 20 ? title : `${title.substring(0, 20)}...`) : ""}
            </span>
          </div>
          <div className="text-start text-sm font-semibold text-gray-500 flex items-center gap-1">
            {snippet?.channelTitle}
            <CheckCircle className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-start text-sm font-semibold text-gray-500">
            {statistics?.viewCount} Views · 1 Day Ago
          </div>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component for Ads
export const AdVideoCard = ({ videos, layout = 'col' }) => {
  return (
    <div className="border border-black rounded-xl">
      <VideoCard videos={videos} layout={layout} />
    </div>
  );
};

export default VideoCard;
