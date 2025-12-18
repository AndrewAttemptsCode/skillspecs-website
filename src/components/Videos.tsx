import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ExitSceneButton from "./ExitSceneButton";

type Video = {
  videoId: string;
  title: string;
  description: string;
  published: string;
  thumbnail: string;
};

const VideoContainer = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  border: 2px solid cyan;
`;

const PlayerContainer = styled.section`
  width: min(90%, 800px);
  aspect-ratio: 16 / 9;
  margin: 0 auto;

  iframe {
    border: none;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
`;

const LibraryContainer = styled.section`
  position: relative;
  overflow: auto;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  scrollbar-width: none;
`;

const LibraryTrack = styled.ul<{ $itemIndex: number }>`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  list-style: none;
  transition: transform 0.3s ease;
  transform: ${({$itemIndex}) => `translateX(-${$itemIndex * 216}px)`}
`;

const LibraryItem = styled.li`

  button {
    padding: 0;
    border: none;
    background: none;
    width: 200px;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s ease;
    
    &:active {
      transform: scale(0.9);
    }

    &:focus-visible {
      box-shadow: 0 0 4px 4px rgb(4, 170, 109);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover img,
      &:focus-visible img {
        transform: translateY(-0.5rem);
      }
    }
  }
  
  img {
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  h2 {
    font-size: clamp(0.725rem, 1.2vw, 1rem);
    text-align: left;
    line-height: 1;
    margin-top: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #FFFFFF;
  }
`;

const ControlButtonContainer = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

const ControlButtonStyles = css`
  z-index: 5;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #FFFFFF;
  background-color: rgba(4, 170, 109, 0.8);
  font-weight: bold;
  border: 2px solid rgb(4, 170, 109);
  transition: background-color 0.3s ease, transform 0.3s ease;
  outline: none;
  user-select: none;

  &:focus-visible {
    box-shadow: 0 0 4px 4px rgb(4, 170, 109);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgb(4, 170, 109);
    }
  }

  &:disabled {
    background-color: rgba(4, 170, 109, 0.4);
    pointer-events: none;
  }
`;

const ControlButtonPrev = styled.button`
  ${ControlButtonStyles}
`;

const ControlButtonNext = styled.button`
  ${ControlButtonStyles}
`;

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const url =
          "https://raw.githubusercontent.com/AndrewAttemptsCode/youtube-video-fetcher/main/data.json";
        const response = await fetch(url);
        const videoData = (await response.json()) as Video[];

        if (!videoData) {
          console.error("Failed to fetch video list");
          return;
        }

        setCurrentVideo(videoData[0]);
        setVideoList(videoData);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      }
    };

    fetchVideos();
  }, []);

  const handlePrev = () => {
    setItemIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setItemIndex((prev) => Math.min(prev + 1, videoList.length - 1));
  };

  if (!currentVideo) return <p>Loading...</p>;

  return (
    <VideoContainer>
      <ExitSceneButton />
      
      <PlayerContainer>
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
          title={currentVideo.title}
          allow="encrypted-media; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </PlayerContainer>

      <LibraryContainer>
        
        <LibraryTrack $itemIndex={itemIndex}>
          {videoList.map((video) => (
            <LibraryItem key={video.videoId}>
              <button
                onClick={() => setCurrentVideo(video)}
                title={video.title}
              >
                <img src={video.thumbnail} alt={video.title} />
                <h2>{video.title}</h2>
              </button>
            </LibraryItem>
          ))}
        </LibraryTrack>

      </LibraryContainer>

      <ControlButtonContainer>
        <ControlButtonPrev
        onClick={handlePrev}
          disabled={itemIndex === 0}
        >
        Prev
        </ControlButtonPrev>

        <ControlButtonNext
          onClick={handleNext}
          disabled={itemIndex === videoList.length - 1}
        >
          Next
        </ControlButtonNext>
      </ControlButtonContainer>

    </VideoContainer>
  );
};

export default Videos;
