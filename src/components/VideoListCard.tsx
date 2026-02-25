import type { Video } from "../hooks/useVideos";
import mask from "../assets/images/masks/button_brush1.png";

type CardProps = {
  video: Video;
  selectedVideo: Video | null;
  updateSelected: (videoDetails: Video) => void;
};

const VideoListCard = ({ video, selectedVideo, updateSelected }: CardProps) => {
  const highlight = video.videoId === selectedVideo?.videoId;

  return (
    <li className="relative" title={video.title}>
      <button
        onClick={() => updateSelected(video)}
        className="cursor-pointer rounded-2xl outline-0 focus-visible:ring-1 focus-visible:ring-[#7FBF3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <img
          src={mask}
          alt=""
          className="absolute inset-0 size-full"
          style={{
            filter: highlight
              ? "drop-shadow(0 0 1px gold) drop-shadow(0 0 1px gold) drop-shadow(0 0 1px gold)"
              : "",
          }}
        />
        <img
          src={video.thumbnail}
          alt=""
          className="aspect-video mask-size-[100%_100%] mask-center mask-no-repeat object-cover object-center"
          style={{ maskImage: `url(${mask})` }}
        />
      </button>
    </li>
  );
};

export default VideoListCard;
