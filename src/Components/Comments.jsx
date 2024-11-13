import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Comments = ({ comments }) => {
    console.log("🚀 ~ Comments ~ comments:", comments)

    const authorProfileImageUrl =  comments.snippet.topLevelComment.snippet.authorProfileImageUrl
    return (
        <>
            <div className='flex gap-5'>
                <div className='h-10 w-10 mt-5 ml-5'>
                {authorProfileImageUrl ? (
    <img className='rounded-full' src={comments.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='Author Profile' />
) : (
    <img  className='rounded-full' src='https://cdn-icons-png.flaticon.com/512/552/552721.png' alt='profileIcon' />
)}

                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col  items-start flex-wrap w-10'>{comments.snippet.topLevelComment.snippet.authorDisplayName}</div>
                    <div className='flex flex-col items-start'>{comments.snippet.topLevelComment.snippet.textDisplay}</div>
                    <div className='flex justify-start'>
              <div className='rounded-l-full w-20 h-12 flex justify-start'><ThumbUpOffAltIcon /> {comments.snippet.topLevelComment.snippet.likeCount}</div>
              <div className='rounded-r-full w-20 h-12 flex justify-start'><ThumbDownOffAltIcon /></div>
            </div>
                </div>

            </div>
        </>
    )
}

export default Comments