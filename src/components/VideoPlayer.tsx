import type { Video } from "../hooks/useVideos";
import border from "../assets/images/borders/border.webp";
import { useEffect } from "react";
import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

type VideoProps = {
  video: Video | null;
};

const VideoPlayer = ({ video }: VideoProps) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [video]);

  return (
    <div>
      <div className="w-[90%] max-w-5xl mx-auto py-4">
        {!video ? (
          <VideoPlayerSkeleton />
        ) : (
          <section
            aria-label="Youtube video player"
            className="relative aspect-video p-1"
          >
            <div
              style={{ backgroundImage: `url(${border})` }}
              className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
            />
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="encrypted-media; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full border-0"
            ></iframe>
          </section>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
