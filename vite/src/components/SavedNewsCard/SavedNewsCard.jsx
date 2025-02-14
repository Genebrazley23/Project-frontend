import "./SavedNewsCard.css";
import trashcan from "../../assets/trashcan.png";
import { useEffect, useState } from "react";
import dataLoader from "../../utils/data";
import { useLiveData } from "../../utils/constants";

function SavedNewsCard({ news, deleteSaveNews }) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedPublishDate = formatter.format(new Date(news.publishedAt));

  function handleDeleteButtonClick() {
    deleteSaveNews(news);
  }

  return (
    <div className="saved-card card">
      <div className="saved-card__image-container">
        <img
          className="saved-card__image"
          src={news.urlToImage}
          alt="News image"
        />

        <button
          type="button"
          onClick={handleDeleteButtonClick}
          className={`delete__button `}
          title="Delete"
        >
          {" "}
          <div
            className="delete__icon"
            style={{
              backgroundImage: `url(${trashcan})`,
            }}
          ></div>
        </button>
        <div className="keyword">{news.keyword}</div>
      </div>

      <div className="saved-card__content">
        <p className="saved-card__date">{formattedPublishDate}</p>
        <h3 className="saved-card__title">{news.title}</h3>
        <p className="saved-card__description">{news.description}</p>
        <p className="saved-card__source">{news.source.name}</p>
      </div>
    </div>
  );
}

export default SavedNewsCard;
