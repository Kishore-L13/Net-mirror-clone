import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utils/store'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    //const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
   // console.log("clicked",isMenuOpen)
if (!isMenuOpen) return null;
  return (
    <div className="px-5 w-70 shadow-2xl ">
        <div className=' border-b-gray-400'>
            <ul>
               <Link to="/"> <li>Home</li></Link>
               <Link to="demo"> <li>demo</li></Link>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>History</li>
                <li>Playlists</li>
                <li>Your videos</li>
                <li>Watch later</li>
                <li>Liked videos</li>
            </ul>
        </div>
      <div> Explore
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Courses</li>
            <li>Fashion & beauty</li>
            <li>Podcasts</li>
        </ul> </div> 
        </div>
  )
}

export default Sidebar