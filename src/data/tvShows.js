// Movies Filter Options ===================
const include_adult = false;
const include_video = true;
const language = "en-US";

// 'Discover' TV Shows API URL ===================
export const tvUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=${include_video}`;

// 'Search' TV Shows API URL by  ===================
export const tvUrlBySearch = `https://api.themoviedb.org/3/search/tv?&include_adult=${include_adult}&language=${language}&query=`;

// Movies API URL Details by ID ===================
export const tvShowsUrlDetailsById = `https://api.themoviedb.org/3/tv/`;

// TV Shows API URL Trends ===================
export const tvShowUrlTrendsWeek = `https://api.themoviedb.org/3/trending/tv/week`;
export const tvShowUrlTrendsDay = `https://api.themoviedb.org/3/trending/tv/day`;
