import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { moviesUrl } from "../../data/movies";
import useFetchAxios from "../../hooks/useFetchAxios";

import { LazyLoadImage } from "react-lazy-load-image-component";

const RecomendedMovies = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetchAxios(`${moviesUrl}&page=2`);

  return (
    <>
      {loading ? (
        <>
          {/* <Lodin /> */}
          <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
            <i className="bi bi-stars"></i>
            <span>Recomended Movies</span>
          </h1>
          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((i) => {
              return (
                <div
                  key={i}
                  role="status"
                  className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                >
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="min-h-[80vh]">
          {data !== null && data !== undefined && (
            <>
              <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
                <i className="bi bi-stars"></i>
                <span>Recomended Movies</span>
              </h1>

              <div className="grid w-full grid-cols-1 gap-1 text-white border border-cyan-400 md:grid-cols-4">
                <>
                  {data?.results.map((card, i) => {
                    return (
                      <Link
                        key={card.id}
                        className="relative card rounded"
                        to={`/movies/movie?id=${card.id}`}
                      >
                        <LazyLoadImage
                          src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                          alt={card.original_title}
                          height={"100%"}
                          width={"100%"}
                        />
                        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all delay-100 bg-gray-600 opacity-0 card__overlay hover:opacity-80">
                          <div className="p-2 text-center overlay__text w-100">
                            <p>{card.original_title}</p>
                            <p>{card.release_date}</p>
                            <p>{card.vote_average}</p>
                            <p>Vote Count : {card.vote_count}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-4">
                    <p
                      onClick={() => navigate("/movies/1/")}
                      className="w-fit py-1 cursor-pointer px-4 my-5 mx-auto bg-gray-50 text-black rounded"
                    >
                      Show more...
                    </p>
                  </div>
                </>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RecomendedMovies;
