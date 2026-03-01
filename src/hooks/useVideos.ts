import { useEffect, useState } from "react";
import fetchVideos from "../api/videos";

export type Video = {
  videoId: string;
  title: string;
  description: string;
  published: string;
  thumbnail: string;
};

const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setError(null);
        const data: Video[] = await fetchVideos();
        setVideos(data);
        setSelectedVideo(data[0]);
        setRetries(0);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error("Unknown Error:", err);
        }
        setError("Failed to fetch videos. Please try again.");
        setRetries((prev) => prev + 1);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, [reloadKey]);

  const updateSelected = (videoDetails: Video) => {
    setSelectedVideo(videoDetails);
  };

  const retry = () => {
    setReloadKey((prev) => prev + 1);
  };

  return {
    videos,
    selectedVideo,
    updateSelected,
    loading,
    error,
    retry,
    retries,
  };
};

export default useVideos;
