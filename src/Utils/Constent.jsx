//const Google_key = "AIzaSyB3Mel-8RXTEJ6tXRWxC_XVEbw_Zj_NcFM"
//const GOOGLE_API_KEY = "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";
//const Google_key = "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";

const API_KEY = "AIzaSyAbCSrZe7VdKao_lOlu7lzLzguzceTLJhE"
export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

  export const Search_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  export const timeconstent = 10