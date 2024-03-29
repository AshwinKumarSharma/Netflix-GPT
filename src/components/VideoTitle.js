import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 px-3 md:py-4 md:px-12 text-xl hover:bg-opacity-70 rounded-md">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-700 text-white p-4 px-12 text-xl bg-opacity-80 hover:bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
