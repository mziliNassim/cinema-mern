// ===================
// export const serverApiUrl = "http://localhost:3003";
export const serverApiUrl = process.env.REACT_APP_API_URL;

// Connect API Options (key...)===================
export const options = {
  details: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk4OTJjYTcxNTg2ZDA2NTg1MTI5NGMwM2VmN2Y1MSIsIm5iZiI6MTczMTkzNjY1NS4xNzEzMjI4LCJzdWIiOiI2NmYwMzJjNDkyZDM5Njg1MzgzYjc2NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bNeE2-U0Ie_yJFM8Y9BWOS61PAxSf_xg8N649EuUxhQ",
    },
  },
};

// Populair People API URL  ===================
export const peopleUrlPopulair = `https://api.themoviedb.org/3/person/popular`;
