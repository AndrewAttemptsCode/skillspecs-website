import type { Video } from "../hooks/useVideos";
import mask from "../assets/images/masks/button_brush1.png";

type CardProps = {
  video: Video;
  selectedVideo: Video | null;
}

const VideoListCard = ({ video, selectedVideo }: CardProps) => {

  const highlight = video.videoId === selectedVideo?.videoId;

  return (
    <li className="relative">
      <img
        src={mask} alt=""
        className="absolute inset-0 size-full"
        style={{ filter: highlight ? ("drop-shadow(0 0 1px gold) drop-shadow(0 0 1px gold) drop-shadow(0 0 1px gold)") : "" }}
      />
      <img 
        src={video.thumbnail} alt=""
        className="aspect-video mask-size-[100%_100%] mask-center mask-no-repeat"
        style={{ maskImage: `url(${mask})` }}
      />
    </li>
  );
};

export default VideoListCard;
