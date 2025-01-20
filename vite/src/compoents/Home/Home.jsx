import { NewsStoryContext } from "../../context/NewsStoryContext";
import { useContext, useState } from "react";
import Homeimage from "../../assets/Homeimage.jpeg";
import "./Home.css";
import Preloader from "../Preloader/preloader";
import NewsCard from "../NewsCard/NewsCard";
import aboutImage from "../../assets/Aboutimage.jpeg";
import Search from "../SearchForm/Search";
import Footer from "../Footer/Footer";

const Home = ({ handleSearch, hasApiError }) => {
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

  return (
    <div className="home__container">
      <div className="home__topHalf">
        <img src={Homeimage} alt="Home Image" className="home__image" />
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
            (!newsStoryContext?.articles?.length && (
              <p>
                {hasApiError
                  ? "Sorry, something went wrong during the request. Please try again later."
                  : "No results found"}
              </p>
            ))
          )}
          {storyCount < newsStoryContext?.articles?.length && (
            <button className="showMore__button" onClick={handleShowMoreClick}>
              <span className="showMore__button-text">Show more</span>
            </button>
          )}
        </div>
      )}
      <div className="about__container">
        <img src={aboutImage} alt="about Image" className="about__image" />
        <h1 className="about__title">About the author</h1>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br></br> <br></br>
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
      {true && <Footer />}
    </div>
  );
};

export default Home;
