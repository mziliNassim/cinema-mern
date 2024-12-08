import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useFetchAxios from "../../hooks/useFetchAxios.js";
import { movieUrlPopulaire } from "../../data/movies.js";

import { LazyLoadImage } from "react-lazy-load-image-component";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const CarouselCard = () => {
  const { data, loading } = useFetchAxios(movieUrlPopulaire);
  return (
    <>
      {loading ? (
        <>
          <div className="my-5 min-h-[50vh]">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              transitionDuration={10}
              partialVisible={false}
              dotListclassName="custom-dot-list-style"
            >
              {[0, 1, 2, 3, 4, 5].map((index) => {
                return (
                  <div className="p-0 mx-1 slider" key={index}>
                    <div
                      role="status"
                      className="w-full h-full flex items-center justify-center max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                    >
                      <svg
                        className="w-full h-[50vh] text-gray-200 dark:text-gray-600 object-contain"
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
                  </div>
                );
              })}
            </Carousel>
          </div>
        </>
      ) : (
        <>
          <div className="my-5  min-h-[50vh]">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              transitionDuration={10}
              partialVisible={false}
              dotListclassName="custom-dot-list-style"
            >
              {data !== null &&
                data.results.map((card, index) => {
                  return (
                    <div className="p-0 mx-1 slider" key={index}>
                      <Link
                        className="relative card"
                        to={`/movies/movie?id=${card.id}`}
                      >
                        <LazyLoadImage
                          src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                          alt={card.original_title}
                          height={"100%"}
                          width={"100%"}
                        />
                        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all delay-100 bg-gray-600 opacity-0 card__overlay hover:opacity-80">
                          <div className="flex flex-col gap-3 p-2 text-2xl font-semibold text-center text-white overlay__text w-100">
                            <p>{card.original_title}</p>
                            <p>{card.release_date}</p>
                            <p>{card.vote_average}</p>
                            <p>{card.vote_count} Vote</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default CarouselCard;
