import type { Video } from "../hooks/useVideos";
import VideoListCard from "./VideoListCard";
import VideoListSkeleton from "./VideoListSkeleton";

type ListProps = {
  videos: Video[] | null;
  selectedVideo: Video | null;
  updateSelected: (videoDetails: Video) => void;
};

const VideoList = ({ videos, selectedVideo, updateSelected }: ListProps) => {
  return (
    <div>
      <section className="mx-auto w-[90%] max-w-330 bg-white/10 p-4 backdrop-blur-sm">
        {!videos ? (
          <VideoListSkeleton />
        ) : (
          <>
            <h2 className="font-heading mb-4 bg-black/40 p-2 text-xl text-[#7FBF3F] backdrop-blur-sm md:text-2xl">
              Latest Videos...
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
              {videos.map((video) => (
                <VideoListCard
                  key={video.videoId}
                  video={video}
                  selectedVideo={selectedVideo}
                  updateSelected={updateSelected}
                />
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default VideoList;
