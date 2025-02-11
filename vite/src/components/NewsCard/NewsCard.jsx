import "./NewsCard.css";
import bookmark from "../../assets/bookmark.png";
import bookmarked from "../../assets/bookmarked.png";
import { useEffect, useState } from "react";
import dataLoader from "../../utils/data";
import { useLiveData } from "../../utils/constants";

function NewsCard({ news, isLoggedIn, index }) {
  const [isBookMarked, setIsBookMarked] = useState(false);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedPublishDate = formatter.format(new Date(news.publishedAt));

  useEffect(() => {
    if (useLiveData) {
      setIsBookMarked(index % 2 === 0);
    } /*else {
      dataLoader.isBookMarked(news.url).then((res) => {
        setIsBookMarked(true);
      });
    }*/
  }, [isBookMarked]);

  console.log("oeownxonw", news.urlToImage);

  return (
    <div className="news-card card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={news.urlToImage}
          alt="News image"
        />

        <button
          type="button"
          className={`bookmark__button ${
            isLoggedIn
              ? "bookmark__button--active"
              : "bookmark__button--inactive"
          }`}
          title={isLoggedIn ? "Save article" : "Sign in to save articles"}
          disabled={!isLoggedIn}
        >
          <div
            className="bookmark__icon"
            style={{
              backgroundImage: `url(${isBookMarked ? bookmarked : bookmark})`,
            }}
          ></div>
        </button>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{formattedPublishDate}</p>
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__description">{news.description}</p>
        <p className="news-card__source">{news.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
