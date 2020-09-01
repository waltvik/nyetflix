import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import RecomCard from "./RecomCard";

const DetailsPage = (props) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8762/netflix/recommendations/" +
          props.location.state.id
      )
      .then((result) => {
        console.log(result.data);
        console.log("is u recomms?");
        setRecommendations(result.data);
      });
  }, [props.location.state.id]);

  return (
    <div>
      <div style={{ fontSize: "25px", margin: "50px 0 0 0" }}>
        {props.location.state.name}
      </div>
      <ReactPlayer
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}
        url={props.location.state.url}
      />
      <div>
        {recommendations.map((recom) => (
          <RecomCard key={recom.id} recom={recom} />
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
