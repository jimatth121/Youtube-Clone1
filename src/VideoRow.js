import React from "react";
import './VideoRow.css'

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videorow  flex-col md:flex-row">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videorow__headline md:mt-4">
          {channel} • <span className="videorow__subs"> <span className="videorow__subnumber">{subs}</span>  Subscribers </span>{views} views • {timestamp}
        </p>
        <p className="videorow__description md:mt-4">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
