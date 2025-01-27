import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import dataLoader from "../../utils/data";
import Preloader from "../Preloader/preloader";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SaveNews.css";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const saveNews = ({ setHeaderTheme }) => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasApiError, setHasApiError] = useState(false);

  const navigate = useNavigate();

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
      return;
    }
  }, [currentUser]);

  const keywords = savedArticles.map((articles) => articles.keyword);
  let keywordDecription = keywords[0];
  if (keywords.length > 1) {
    keywordDecription += `, ${keywords[1]}`;
  }
  if (keywords.length == 3) {
    keywordDecription += `, and ${keywords[2]}`;
  }
  if (keywords.length > 3) {
    keywordDecription += `, and ${keywords.length - 2} other`;
  }
  function deleteSavedNews(news) {
    setSavedArticles((prev) => prev.filter((n) => n !== news));
  }

  useEffect(() => {
    setHeaderTheme("header__dark");
  }, []);

  useEffect(() => {
    dataLoader
      .getSavedArticles()
      .then((data) => {
        console.log(data);
        setSavedArticles(data);
      })
      .catch((error) => {
        setHasApiError(true);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="saveNews__container">
      <h1 className="saveNews__title">Saved articles</h1>
      <div className="saveNews__subtitle">
        {currentUser?.name}, you have {savedArticles?.length} saved articles
      </div>
      <div className="saveNews__keyword">
        by keywords:
        <span className="saveNews__keyword-description">
          {keywordDecription}
        </span>
      </div>
      <div className="search__results">
        {isLoading ? (
          <Preloader text="Loading..." />
        ) : (
          (savedArticles?.length && (
            <div className="search__results-container">
              <div className="search__results-list">
                {savedArticles &&
                  savedArticles.map((article, index) => (
                    <SavedNewsCard
                      news={article}
                      key={index}
                      index={index}
                      deleteSaveNews={deleteSavedNews}
                    />
                  ))}
              </div>
            </div>
          )) ||
          (!savedArticles?.length && (
            <p>
              {hasApiError
                ? "Sorry, something went wrong during the request. Please try again later."
                : "No results found"}
            </p>
          ))
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default saveNews;
