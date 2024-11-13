const GOOGLE_API_KEY = "AIzaSyBo1XNu-MNjIKbOlU1BPDs4y-BFvE-UxBI"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&&maxResults=50&key=" + GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API_2 = (videoId) =>
    `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet,replies&maxResults=100&videoId=${videoId}&key=${GOOGLE_API_KEY}`;


export const Video_Details_Api = (videoId) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`;


export const Category_Api = (videoId) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${videoId}&key=${GOOGLE_API_KEY}`;


export const YouTube_Search_Api = (searchText) => `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${searchText}`;

export const LIVE_CHAT_COUNT = 25;
