import "./NewsCard.css";
import bookmark from "../../assets/bookmark.png";
import Search from "../SearchForm/Search";

function NewsCard({ news }) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedPulishDate = formatter.format(new Date(news.publishedAt));

  return (
    <div className="news-card">
      <h2 className="search-results-header">Search Results</h2>
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={news.urlToImage}
          alt="News image"
        />
        <button
          type="button"
          className="bookmark__button"
          style={{ backgroundImage: `url(${bookmark})` }}
        ></button>
      </div>
      <div className="news-card__content">
        <p>{formattedPulishDate}</p>
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__description">{news.description}</p>
        <p>{news.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
