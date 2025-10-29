"use client";
import { useRef, useState } from "react";

interface Props {
  disableAudio?: boolean;
  enableControls?: boolean;
  source: string;
}

const Video = ({
  disableAudio = false,
  enableControls = false,
  source,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Button Visibility
  const [showUnmuteButton, setShowUnmuteButton] = useState(true); // Show unmute button by default
  const [showReplayButton, setShowReplayButton] = useState(false); // Hide replay button by default

  // Video State
  const [isLoading, setIsLoading] = useState(true); // Set isLoading initially
  const [isPlaying, setIsPlaying] = useState(false); // Sat NOT playing initially

  // When the video is ready to play
  const handleCanPlay = () => {
    setIsLoading(false); // Mark it as not loading
    setIsPlaying(true); // Mark it as playing
  };

  // When the video has ended
  const handleEnded = () => {
    // If there is a video and the "loop" is disabled
    if (videoRef.current) {
      setIsPlaying(false); // Set state as not playing
      setShowReplayButton(true); // Show the replay button
      videoRef.current.controls = false; // Disable controls to only show replay button
    }
  };

  const handleButtonPress = () => {
    // If there is a video element
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the volume
      videoRef.current.loop = false; // Disable looping
      videoRef.current.controls = true; // Enable controls since there is audio
    }

    setIsPlaying(true); // Set isPlaying true in state
    setShowUnmuteButton(false); // Hide the unmute button
    setShowReplayButton(false); // Hide the replay button

    videoRef.current?.play(); // Play the video -> doens't matter if its already playing
  };

  const LoadingScreen = () => {
    return (
      <div
        className="placeholder-container md:rounded-md shadow-lg bg-gray-200 flex items-center justify-center"
        style={{ width: "100%", aspectRatio: "16/9" }}
      >
        {/* Example Placeholder: You can put an image, a spinner, or text here */}
        <div className="text-gray-600 animate-pulse text-3xl">
          Loading Video...
        </div>
      </div>
    );
  };

  interface VideoButtonProps {
    location: "center" | "topRight";
    text: string;
  }

  const VideoButton = ({ location, text }: VideoButtonProps) => {
    let translation = "translate(0%, 0%)";
    if (location == "center") translation = "translate(-50%, -50%)";

    const defaultButtonStyles =
      "absolute text-white font-bold text-[10px] md:text-base border-1 border-[var(--dark-gray)] border-t-[var(--gray-medium)] border-r-[var(--gray-medium)] rounded-xl py-2 px-3 bg-[rgba(0,0,0,.1)] cursor-pointer";

    return (
      <button
        className={`${defaultButtonStyles} ${
          location == "center"
            ? "top-[50%] left-[50%]"
            : location == "topRight"
              ? "top-[10px] right-[10px]"
              : ""
        }`}
        onClick={handleButtonPress}
        style={{
          transform: translation,
          backdropFilter: "blur(5px)",
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <>
      {/* Show a loading screen if isLoading is playing */}
      {isLoading && <LoadingScreen />}

      {/* The Video Container */}
      <div className="relative">
        {/* The Video itself - hidden if !isLoading in state which is the case until handleCanPlay is called onCanPlay */}
        <video
          className={`md:rounded-md shadow-lg ${
            isLoading ? "hidden" : "block"
          }`}
          muted
          controls={enableControls}
          controlsList="nodownload nofullscreen"
          autoPlay
          onCanPlay={handleCanPlay}
          onEnded={handleEnded}
          playsInline
          loop
          ref={videoRef}
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Only show the unmute button if its enabled, the video is not loading, AND audio hasn't been disabled by props */}
        {showUnmuteButton && !isLoading && !disableAudio && (
          <VideoButton location="topRight" text="Enable Audio" />
        )}

        {/* Only show the replay button if its enabled, the video is not loading, the video is not playing, AND audio hasn't been disabled by props */}
        {/* Reasoning for !disabledAudio: Why have a replay button if the video is looped with no audio */}
        {showReplayButton && !isLoading && !isPlaying && !disableAudio && (
          <VideoButton location="center" text="Play Again" />
        )}
      </div>
    </>
  );
};

export default Video;
