import type { Video } from "../hooks/useVideos";
import VideoListCard from "./VideoListCard";

type ListProps = {
  videos: Video[];
  selectedVideo: Video | null;
}

const VideoList = ({ videos, selectedVideo }: ListProps) => {
  return (
    <div>
      <section className="w-[90%] max-w-330 p-4 mx-auto bg-white/10 backdrop-blur-sm">
        <h2 className="font-heading text-[#7FBF3F] p-2 bg-black/40 backdrop-blur-sm text-xl md:text-2xl mb-4">Latest Videos...</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {videos.map(video => (
            <VideoListCard key={video.videoId} video={video} selectedVideo={selectedVideo} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VideoList;
