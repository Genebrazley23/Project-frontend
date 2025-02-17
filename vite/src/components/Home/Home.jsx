import { NewsStoryContext } from "../../context/NewsStoryContext";
import { useContext, useEffect, useState } from "react";
import Homeimage from "../../assets/Homeimage.jpeg";
import "./Home.css";
import Preloader from "../Preloader/preloader";
import NewsCard from "../NewsCard/NewsCard";
import aboutImage from "../../assets/Aboutimage.jpeg";
import Footer from "../Footer/Footer";
import notfound from "../../assets/notfound.png";

const Home = ({ handleSearch, hasApiError, setHeaderTheme }) => {
  const newsStoryContext = useContext(NewsStoryContext);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [storyCount, setStoryCount] = useState(0);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    setStoryCount(3);
    setHasSearched(true);
    setIsLoading(true);
    handleSearch(query, () => setIsLoading(false));
  };

  const handleShowMoreClick = () => {
    setStoryCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    setHeaderTheme("change__header-light");
  }, [setHeaderTheme]);

  return (
    <main className="home">
      <section
        className="home__topHalf"
        style={{ backgroundImage: `url(${Homeimage})` }}
      >
        <div className="home__content">
          <h1 className="home__title">What's going on in the world ?</h1>
          <p className="home__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <div className="search">
            <input
              type="text"
              className="search__input"
              value={query}
              onChange={handleQueryChange}
              placeholder="Enter topic"
            />
            <button
              className="search__input-button"
              onClick={handleSearchClick}
            >
              <span className="search__input-button-icon">Search</span>
            </button>
          </div>
        </div>
      </section>
      {hasSearched && (
        <section className="search__results">
          <h2 className="search__results-title">Search results</h2>
          {isLoading ? (
            <Preloader text="Loading..." />
          ) : newsStoryContext.articles?.length ? (
            <div className="search__results-container">
              <ul className="search__results-list">
                {newsStoryContext.articles
                  .slice(0, storyCount)
                  .map((article, index) => (
                    <li key={index} className="search__results-item">
                      <NewsCard news={article} />
                    </li>
                  ))}
              </ul>
              {storyCount < newsStoryContext.articles.length && (
                <button
                  className="showMore__button"
                  onClick={handleShowMoreClick}
                >
                  <span className="showMore__button-text">Show more</span>
                </button>
              )}
            </div>
          ) : hasApiError ? (
            <h3>
              Sorry, something went wrong during the request. Please try again
              later.
            </h3>
          ) : (
            <div className="noResults__container">
              <img
                className="notfound__image"
                src={notfound}
                alt="not found image"
              />
              <h2 className="notfound__title">Nothing Found</h2>
              <h3 className="notfound__description">
                Sorry, but nothing matched your search terms.
              </h3>
            </div>
          )}
        </section>
      )}
      <section className="about">
        <div className="about__image-container">
          <img src={aboutImage} alt="about Image" className="about__image" />
        </div>
        <div className="about__details-container">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__description">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
