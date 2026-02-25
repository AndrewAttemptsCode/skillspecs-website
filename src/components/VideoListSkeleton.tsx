const VideoListSkeleton = () => {
  return (
    <>
      <div className="mb-4 h-12 animate-pulse rounded-md bg-black/60 p-2" />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {[...Array(20)].map((_, index) => (
          <li
            key={index}
            className="aspect-video animate-pulse rounded-md bg-black/60"
          ></li>
        ))}
      </ul>
    </>
  );
};

export default VideoListSkeleton;
