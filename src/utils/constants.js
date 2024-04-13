const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube138.p.rapidapi.com/auto-complete/?q=";

export const COUNTRY_META = "&hl=en&gl=US";

export const SEARCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43e0c69036msh01e419e3a0097afp155cfejsn6a02a56683fb",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
