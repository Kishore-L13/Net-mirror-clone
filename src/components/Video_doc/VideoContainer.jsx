import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../Utils/Constent";
import VideoCard from "./VideoCard";
import Shimmer from "../../Utils/Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setVideos(json.items || []); // Ensure we set an array
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div className="flex flex-wrap">
    {videos.length > 0 ? (
    videos.map((video) => 
    <Link key={video.id} to={"/watch?v="+video.id}
      state={{ video }}>
      <VideoCard info={video}/>
       </Link>)
    ) : (
      <Shimmer/>
    )}
  </div>
  );
};

export default VideoContainer;
