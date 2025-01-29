import { NewsStoryContext } from "../../context/NewsStoryContext";
import { useContext, useEffect, useState } from "react";
import Homeimage from "../../assets/Homeimage.jpeg";
import "./Home.css";
import Preloader from "../Preloader/preloader";
import NewsCard from "../NewsCard/NewsCard";
import aboutImage from "../../assets/Aboutimage.jpeg";
import Search from "../SearchForm/Search";
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

  const handleSreachClick = () => {
    setStoryCount(3);
    setHasSearched(true);
    setIsLoading(true);
    handleSearch(query, () => setIsLoading(false));
  };

  const handleShowMoreClick = () => {
    setStoryCount((p) => p + 3);
    console.log("show more clicked");
  };

  useEffect(() => {
    setHeaderTheme("header__light");
  }, []);

  return (
    <div className="home__container">
      <div className="home__topHalf">
        <div
          style={{ backgroundImage: `url(${Homeimage})` }}
          className="home__image"
        ></div>
        <h1 className="home__title">What's going on in the world ?</h1>
        <p className="home__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="search__container">
          <input
            type="text"
            className="search__input"
            onChange={handleQueryChange}
          />
          <button className="search__input-button" onClick={handleSreachClick}>
            <span className="search__input-button-icon">Search</span>
          </button>
        </div>
      </div>
      {hasSearched && (
        <div className="search__results">
          {isLoading ? (
            <Preloader text="Loading..." />
          ) : (
            (newsStoryContext?.articles?.length && (
              <div className="search__results-container">
                <div>
                  <Search />
                </div>
                <div className="search__results-list">
                  {newsStoryContext?.articles &&
                    newsStoryContext.articles
                      .slice(0, storyCount)
                      .map((article, index) => (
                        <NewsCard news={article} key={index} index={index} />
                      ))}
                </div>
              </div>
            )) ||
            (!newsStoryContext?.articles?.length &&
              (hasApiError ? (
                <p>
                  Sorry, something went wrong during the request. Please try
                  again later.
                </p>
              ) : (
                <div className="noResults__container">
                  <img
                    className="notfound__image"
                    src={notfound}
                    alt="not found image"
                  ></img>
                  <h2>Nothing Found</h2>
                  <p>Sorry, but nothing matched your search terms.</p>
                </div>
              )))
          )}
          {storyCount < newsStoryContext?.articles?.length && (
            <button className="showMore__button" onClick={handleShowMoreClick}>
              <span className="showMore__button-text">Show more</span>
            </button>
          )}
        </div>
      )}
      <div className="about__container">
        <div className="about__image-container">
          <img src={aboutImage} alt="about Image" className="about__image" />
        </div>
        <div className="about__details-container">
          <h1 className="about__title">About the author</h1>
          <p className="about__description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            <br></br> <br></br>
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
