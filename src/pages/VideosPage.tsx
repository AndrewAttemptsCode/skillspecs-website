import ErrorDisplay from "../components/ErrorDisplay";
import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";
import useVideos from "../hooks/useVideos";

const VideosPage = () => {
  const { videos, selectedVideo, updateSelected, error, retry, retries } =
    useVideos();

  if (error)
    return <ErrorDisplay error={error} retry={retry} retries={retries} />;

  return (
    <div className="flex flex-1 flex-col">
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
