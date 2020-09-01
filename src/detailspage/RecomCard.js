import React from "react";
import { Link } from "react-router-dom";

const RecomCard = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px 4fr",
        marginLeft: "200px",
        padding: "20px",
      }}
      key={props.recom.id}
    >
      <div>{props.recom.rating}</div>
      <div style={{ textAlign: "left" }}>{props.recom.comment}</div>
    </div>
  );
};

export default RecomCard;
