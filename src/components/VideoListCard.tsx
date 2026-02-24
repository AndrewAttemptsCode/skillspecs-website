import type { Video } from "../hooks/useVideos";

type CardProps = {
  video: Video;
}

const VideoListCard = ({ video }: CardProps) => {
  return (
    <li>
      <img className="aspect-video" src={video.thumbnail} alt="" />
    </li>
  );
};

export default VideoListCard;
