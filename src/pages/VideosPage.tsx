import ErrorDisplay from "../components/ErrorDisplay";
import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";
import useVideos from "../hooks/useVideos";

const VideosPage = () => {
  const { videos, selectedVideo, updateSelected, error } = useVideos();

  if (error) return <ErrorDisplay error={error} />

  return (
    <div className="flex-1 flex flex-col">
      <VideoPlayer video={selectedVideo} />
      <VideoList
        videos={videos}
        selectedVideo={selectedVideo}
        updateSelected={updateSelected}
      />
    </div>
  );
};

export default VideosPage;
