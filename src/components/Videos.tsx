import { useEffect, useState } from "react";
import styled from "styled-components";

type Video = {
  videoId: string;
  title: string;
  description: string;
  published: string;
  thumbnail: string;
};

const PlayerContainer = styled.section`
  aspect-ratio: 16 / 9;

  iframe {
    border: none;
  }
`;

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [videoList, setVideoList] = useState<Video[]>([]);

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

  if (!currentVideo) return <p>Loading...</p>;

  return (
    <>
      <PlayerContainer>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
          title={currentVideo.title}
          allow="encrypted-media; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </PlayerContainer>

      <section>
        {videoList.map((video) => (
          <img key={video.videoId} src={video.thumbnail} alt={video.title} />
        ))}
      </section>
    </>
  );
};

export default Videos;
