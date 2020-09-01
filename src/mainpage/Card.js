import React from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";

const Card = (props) => {
  return (
    <div className="video-card" key={props.video.id}>
      <div>{props.video.id}</div>
      <Link
        to={{
          pathname: "/video/" + props.video.id,
          state: {
            id: props.video.id,
            name: props.video.name,
            url: props.video.url,
          },
        }}
      >
        {props.video.name}
      </Link>
    </div>
  );
};

export default Card;
