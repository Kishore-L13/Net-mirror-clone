import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/navSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import { useLocation } from 'react-router-dom';
import LiveComment from './LiveComment'

const Watchvideo = () => {
  const location = useLocation();
  const videoDetails = location.state?.video; // Retrieve video details

    const [searchParams] = useSearchParams();
    //const videoId = searchParams.get("v");
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='px-10 py-4 '>
      <div className='flex'>
        <iframe 
        className='rounded-xl'
        width="900" 
        height="480" 
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player" 
         frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        {/* Show Video Stats if available */}
        <div className='m-2 w-90 bg-slate-100 rounded-md'>
          <LiveComment/></div>
        </div>
      <div className="mt-4">
        {videoDetails ? (
          <p className="text-lg font-semibold">
          {videoDetails.snippet?.title} 
            👍 {videoDetails.statistics?.likeCount || "N/A"} Likes | 💬{" "}
            {videoDetails.statistics?.commentCount || "N/A"} Comments
            {videoDetails.snippet?.channelTitle}
          </p>
        ) : (
          <p>Loading video details...</p>
        )}
      </div>
        <div><CommentContainer/></div>
        </div>
  )
}

export default Watchvideo