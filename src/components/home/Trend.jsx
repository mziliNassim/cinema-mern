import React from "react";
import { Link } from "react-router-dom";

import useFetchAxios from "../../hooks/useFetchAxios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Trend = ({ type, url }) => {
  const { data, loading } = useFetchAxios(url);

  return (
    <>
      {loading ? (
        <div className="min-h-[50vh]">
          <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
            <i className="bi bi-stars"></i>
            <span>Movies Of {type === "day" ? "The Day" : "The Week"}</span>
          </h1>
          <div
            role="status"
            className=" relative w-full h-full p-1 border border-gray-200 rounded shadow animate-pulse md:p-1 dark:border-gray-700"
          >
            <div className="flex w-full h-full items-center justify-center bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-full h-full text-gray-200 opacity-0 dark:text-gray-600 object-contain"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-100 mb-4 w-2/3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-100 mb-2.5 w-4/5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-100 mb-2.5 w-full"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-100"></div>
              <div className="flex items-center mt-4">
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-100 w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-100"></div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 gap-2 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
                  disabled
                >
                  <i className="bi bi-camera-reels"></i>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-100 w-20"></div>
                </button>
                <button
                  type="button"
                  className="py-2.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 gap-2 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
                  disabled
                >
                  <i className="bi bi-patch-plus-fill"></i>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-100 w-24"></div>
                </button>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        data.results.length > 0 && (
          <>
            <div className="min-h-[50vh]">
              <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
                <i className="bi bi-stars"></i>
                <span className="capitalize">{type} Of The Week</span>
              </h1>
              <div className="relative w-full text-white border border-cyan-400 ">
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500${data.results[0]?.poster_path}`}
                  alt={data.original_title}
                  height={"100%"}
                  width={"100%"}
                  className="w-full min-h-[70vh] h-full opacity-50"
                />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white rounded-tl-full">
                  <h2 className="my-5 text-4xl font-semibold">
                    {data.results[0]?.title}
                  </h2>
                  <div className="flex items-center justify-center w-full gap-4 my-5 text-xl font-semibold">
                    {data.results[0]?.release_date}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      to={
                        (type === "movie"
                          ? "/movies/movie?id="
                          : "/tvshows/tvshow?id=") + data.results[0]?.id
                      }
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2 justify-center">
                        <i className="bi bi-camera-reels"></i>
                        Watch
                      </span>
                    </Link>

                    {/* <Link
                      to="/addToWatchList"
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2 justify-center">
                        <i className="bi bi-patch-plus-fill"></i>
                        <span>Add To Watch List</span>
                      </span>
                    </Link> */}
                  </div>
                </div>

                {/* Rate */}
                <div className="absolute top-0 right-0 flex items-center gap-2 px-2 py-1">
                  <i className="text-4xl text-yellow-400 bi bi-star-fill"></i>
                  <div className="flex flex-col items-start">
                    <span className="">
                      <span
                        style={{ fontWeight: 600 }}
                        className="text-4xl font-semibold text-yellow-400"
                      >
                        {data.results[0]?.vote_average}
                      </span>
                      /10
                    </span>
                    <span className="">
                      {data.results[0]?.vote_count} Votes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default Trend;
