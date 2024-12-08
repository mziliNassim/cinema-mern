import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import { movieUrlDetailsById } from "../../data/movies";
import { tvShowsUrlDetailsById } from "../../data/tvShows";
import { options } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardsDetails = () => {
  const [loding, setLoding] = useState(true);
  const [url, setUrl] = useState(null);
  const [card, setCard] = useState({});
  const [type, setType] = useState("");
  const [textColor] = useState("#FFF");
  const location = useLocation();

  // get ID value
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    if (id) {
      if (location.pathname.startsWith("/movies")) {
        setUrl(movieUrlDetailsById + id);
        setType("movie");
      } else {
        setUrl(tvShowsUrlDetailsById + id);
        setType("tvshow");
      }
    }
  }, [location]);

  // Fetch data when the URL changes
  useEffect(() => {
    setLoding(true);
    if (url) {
      axios
        .get(url, options.details)
        .then((res) => {
          setCard(res.data);
        })
        .catch((err) => console.error("err : ", err.message))
        .finally(() => setLoding(false));
    }

    // Scrool to top logic
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <>
        {loding ? (
          <div className="min-h-[60vh] flex items-center justify-center w-full max-w-screen-xl m-0 mx-auto">
            <div className="animate-pulse gap-5 flex items-center justify-center w-full border p-10 rounded max-w-screen-xl m-0 mx-auto">
              <div className="flex items-center border justify-center w-5/12 h-64 bg-gray-300 rounded  dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          card && (
            <div className="min-h-[85vh] p-0 m-0 flex items-center justify-between w-full">
              <div className="flex relative items-center justify-between w-full max-w-screen-xl my-10 mx-auto">
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500/${card?.backdrop_path}`}
                  alt={card?.title}
                  height={"100%"}
                  width={"100%"}
                  className=" z-0 rounded"
                />
                <div className="absolute w-full h-full rounded p-5 top-0 left-0 z-50">
                  <div className="bg-transparent flex items-start justify-between w-full h-full rounded backdrop-blur-lg">
                    {/* Left sid (poster image) */}
                    <LazyLoadImage
                      src={`https://image.tmdb.org/t/p/w500/${card?.poster_path}`}
                      alt={card?.title}
                      className="W-full h-full rounded"
                    />

                    {/* Right sid (infos) */}
                    <div
                      style={{ color: textColor }}
                      className="p-4 h-full flex flex-col justify-between w-full"
                    >
                      {/* TOP side */}
                      <div className="">
                        {/* Titles */}
                        <h1 className="title text-4xl font-semibold italic uppercase mb-8 w-[50%]">
                          {type === "movie" ? card?.title : card?.name}
                        </h1>
                        {/* genres + production_countries */}
                        <div className="mb-8 flex items-center justify-between">
                          {/* genres */}
                          <div className="">
                            {card?.genres &&
                              card?.genres.map((genre) => {
                                return (
                                  <span
                                    key={genre.id}
                                    className="me-3 border px-3 py-1 rounded font-semibold"
                                    style={{ color: textColor }}
                                  >
                                    {genre.name}
                                  </span>
                                );
                              })}
                          </div>
                          {/* release_date */}
                          <div>
                            <span className="me-3 border px-3 py-1 rounded font-semibold">
                              {type === "movie"
                                ? card?.release_date
                                : card?.last_air_date}
                            </span>
                          </div>
                        </div>

                        {/* tagline */}
                        <div className="mb-5">{card?.tagline}</div>

                        {/* overview */}
                        <div className="mb-5">{card?.overview}</div>

                        <div className="flex items-center gap-2 justify-start">
                          {/* number_of_episodes */}
                          {type === "tvshow" && (
                            <>
                              <div className="mb-2 border w-fit px-5 py-1 rounded">
                                {card?.number_of_seasons} Seasons
                              </div>
                              <div className="mb-2 border w-fit px-5 py-1 rounded">
                                {card?.number_of_episodes} Episodes
                              </div>
                            </>
                          )}

                          {/* Midle info */}
                          <div className="mb-2">
                            {/* production_countries */}
                            {card?.production_countries[0] && (
                              <div className="border w-fit px-5 py-1 rounded">
                                <span>
                                  {card?.production_countries[0]?.iso_3166_1}
                                </span>
                                <span> - </span>
                                <span>
                                  {card?.production_countries[0]?.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom side */}
                      <div className="w-full flex items-center justify-between">
                        <div
                          style={{ height: "100px" }}
                          className="w-[50%] flex"
                        ></div>
                        <Link
                          target={card?.homepage !== "" ? "_blank" : ""}
                          to={
                            card?.homepage !== ""
                              ? card?.homepage
                              : `/movies/movie?id=${card?.id}`
                          }
                          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  focus:ring-4 focus:outline-none focus:ring-green-200"
                        >
                          <span className="relative text-xl mx-1 px-5 py-2.5 transition-all ease-in duration-75  bg-black rounded-md group-hover:bg-opacity-0">
                            <i className="bi bi-play-circle-fill fs-4 mx-1"></i>
                            <span>WATCH</span>
                          </span>
                        </Link>
                      </div>

                      {/* Rate */}
                      <div className="absolute top-0 right-0 flex items-center gap-2 px-2 py-1 rounded">
                        <i className="bi bi-star-fill text-4xl text-yellow-400"></i>
                        <div className="flex flex-col items-start">
                          <span className="">
                            <span className="text-yellow-400 font-semibold text-4xl">
                              {card?.vote_average}
                            </span>
                            /10
                          </span>
                          <span className="">{card?.vote_count} Votes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </>
    </>
  );
};

export default CardsDetails;
