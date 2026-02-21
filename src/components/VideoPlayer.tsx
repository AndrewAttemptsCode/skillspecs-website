import type { Video } from "../hooks/useVideos";
import border from "../assets/images/borders/border.webp";

type VideoProps = {
  video: Video;
};

const VideoPlayer = ({ video }: VideoProps) => {
  return (
    <div className="flex justify-center py-4">
      <section
        aria-label="Youtube video player"
        className="relative aspect-video w-[90%] max-w-5xl p-1"
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
    </div>
  );
};

export default VideoPlayer;
