import type { Video } from "../hooks/useVideos";
import border from "../assets/images/borders/border.webp";

type VideoProps = {
  video: Video;
}

const VideoPlayer = ({ video }: VideoProps) => {
  return (
    <div className="flex justify-center py-4">
      <section
        aria-label="Youtube video player"
        className="w-[90%] max-w-5xl aspect-video relative p-1"
      >
        <div
          style={{ backgroundImage: `url(${border})` }}
          className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
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

// const PlayerContainer = styled.section`
//   width: min(90%, 800px);
//   aspect-ratio: 16 / 9;
//   margin: 0 auto;
//   animation: ${LoadIn} 1s ease forwards;

//   iframe {
//     border: none;
//     height: 100%;
//     width: 100%;
//     border-radius: 8px;
//   }
// `;