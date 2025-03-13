import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/navSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'

const Watchvideo = () => {
    const [searchParams] = useSearchParams();
    //const videoId = searchParams.get("v");
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='px-10 py-4 '>
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
        {console.log({video.commentCount})}
        <div><CommentContainer/></div>
        </div>
  )
}

export default Watchvideo