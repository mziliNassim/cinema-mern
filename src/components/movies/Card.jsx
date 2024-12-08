import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ card, type }) => {
  return (
    <>
      <div className="w-full p-1">
        <Link
          className="card group relative block"
          to={`/${type}s/${type}?id=${card.id}`}
        >
          <LazyLoadImage
            alt="sfsf"
            height={"100%"}
            src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
            width={"100%"}
            className="card__image w-full h-full object-cover"
          />
          <div className="card__overlay absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="overlay__text text-center w-full p-1 text-white">
              <p className="text-xl font-semibold">
                {type === "movie" ? card.original_title : card.name}
              </p>
              <p className="text-xl font-semibold">
                {type === "movie" ? card.release_date : card.first_air_date}
              </p>
              <p className="text-xl font-semibold">{card.vote_average}</p>
              <p className="text-xl font-semibold">
                Vote Count : {card.vote_count}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
