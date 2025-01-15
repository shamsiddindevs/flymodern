
import { useRef, useState } from 'react';
import videoframe_0 from "../assets/img/videoframe_0.png";

const VideoBanner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div id='video' className="relative w-full h-[560px] bg-gray-900 flex items-center justify-center">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        poster={videoframe_0} // Optional: fallback image
      >
        <source src="https://www.flymoderntour.uz/highway-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button
        className="absolute flex items-center justify-center text-white text-4xl bg-black bg-opacity-50 rounded-full w-16 h-16"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-6.586-4.223A1 1 0 007 7.885v8.23a1 1 0 001.166.97l6.586-1.67a1 1 0 000-1.847z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoBanner;
