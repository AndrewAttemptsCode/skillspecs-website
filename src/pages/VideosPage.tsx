import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";
import useVideos from "../hooks/useVideos";

const VideosPage = () => {
  const { videos, selectedVideo, updateSelected, error } = useVideos();

  if (error) return <p>{error}</p>;

  return (
    <div>
      <VideoPlayer video={selectedVideo}/>
      {videos && <VideoList videos={videos} selectedVideo={selectedVideo} updateSelected={updateSelected} />}
    </div>
  );
};

export default VideosPage;
