import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";
import useVideos from "../hooks/useVideos";

const VideosPage = () => {
  const { videos, selectedVideo, loading, error } = useVideos();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-dvh bg-emerald-900">
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
      {videos && <VideoList />}
    </div>
  );
};

export default VideosPage;
