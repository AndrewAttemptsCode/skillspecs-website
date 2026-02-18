const URL =
  "https://raw.githubusercontent.com/AndrewAttemptsCode/youtube-video-fetcher/main/data.json";

const fetchVideos = async () => {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(
      `FetchVideos HTTP Error: ${response.status} - ${response.statusText}`,
    );
  }

  return response.json();
};

export default fetchVideos;
