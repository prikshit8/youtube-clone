import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isSideBarVisible = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`p-2 m-2 w-${
        isSideBarVisible ? "72" : "64"
      } shadow-lg cursor-pointer`}
    >
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">
          <span>{title}</span>
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
