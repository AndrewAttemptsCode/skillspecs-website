import { useEffect, useState } from "react";
import fetchVideos from "../api/videos";

type Video = {
  videoId: string;
  title: string;
  description: string;
  published: string;
  thumbnail: string;
};

const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data: Video[] = await fetchVideos();
        setVideos(data);
        setSelectedVideo(data[0]);
      } catch (err) {
        console.error("fetchVideos error: ", err);
        setError("Failed to fetch videos. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  return { videos, selectedVideo, loading, error };
};

export default useVideos;