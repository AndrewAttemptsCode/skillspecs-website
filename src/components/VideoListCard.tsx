import type { Video } from "../hooks/useVideos";
import mask from "../assets/images/masks/button_brush1.png";

type CardProps = {
  video: Video;
}

const VideoListCard = ({ video }: CardProps) => {
  return (
    <li>
      <img 
        src={video.thumbnail} alt=""
        className="aspect-video mask-size-[100%_100%] mask-center mask-no-repeat"
        style={{ maskImage: `url(${mask})` }}
      />
    </li>
  );
};

export default VideoListCard;
