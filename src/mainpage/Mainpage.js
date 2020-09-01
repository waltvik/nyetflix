import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Mainpage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8762/netflix/all-videos").then((result) => {
      console.log(result.data);
      console.log("elo?");
      setVideos(result.data);
    });
  }, []);

  return (
    <div>
      <div className="main-header">Welcome to Nyetflix</div>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
      <div></div>
    </div>
  );
};

export default Mainpage;
