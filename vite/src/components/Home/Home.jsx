import { NewsStoryContext } from "../../context/NewsStoryContext";
import { useContext, useEffect, useState } from "react";
import Homeimage from "../../assets/Homeimage.jpeg";
import "./Home.css";
import Preloader from "../Preloader/preloader";
import NewsCard from "../NewsCard/NewsCard";
import aboutImage from "../../assets/Aboutimage.jpeg";
import Footer from "../Footer/Footer";
import notfound from "../../assets/notfound.svg";
import Header from "../Header/Header";

const Home = ({ handleSearch, hasApiError, showLoginForm, handleLogout }) => {
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

  return (
    <main className="home">
      <section
        className="home__topHalf"
        style={{ backgroundImage: `url(${Homeimage})` }}
      >
        <Header
          handleSignInBtnClick={showLoginForm}
          handleLogout={handleLogout}
          headerTheme="header-light"
          isHomeUnderlined={true}
        />
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
        <section className="results">
          {isLoading ? (
            <Preloader text="Loading..." />
          ) : newsStoryContext.articles?.length ? (
            <div>
              <h2 className="results__title">Search results</h2>
              <div className="results__container">
                <ul className="results__list">
                  {newsStoryContext.articles
                    .slice(0, storyCount)
                    .map((article, index) => (
                      <li key={index} className="results__item">
                        <NewsCard news={article} />
                      </li>
                    ))}
                </ul>
                {storyCount < newsStoryContext.articles.length && (
                  <button
                    className="results__showMore-button "
                    onClick={handleShowMoreClick}
                  >
                    <span className="results__showMore-text">Show more</span>
                  </button>
                )}
              </div>
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
