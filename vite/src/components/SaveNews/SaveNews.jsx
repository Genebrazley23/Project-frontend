import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import dataLoader from "../../utils/data";
import Preloader from "../Preloader/preloader";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SaveNews.css";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const SaveNews = ({ setHeaderTheme }) => {
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

  const keywords = savedArticles.map((article) => article.keyword);
  let keywordDescription = keywords.slice(0, 2).join(", ");
  if (keywords.length > 2) {
    keywordDescription += `, and ${keywords.length - 2} other${
      keywords.length > 3 ? "s" : ""
    }`;
  }

  function deleteSavedNews(news) {
    setSavedArticles((prev) => prev.filter((n) => n !== news));
  }

  useEffect(() => {
    setHeaderTheme(".change__header-dark");
  }, []);

  useEffect(() => {
    dataLoader
      .getSavedArticles()
      .then((data) => setSavedArticles(data))
      .catch((error) => {
        setHasApiError(true);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="saveNews">
      <section>
        <h1 className="saveNews__title">Saved Articles</h1>
        {currentUser && (
          <p className="saveNews__subtitle">
            {currentUser.name}, you have {savedArticles.length} saved articles.
          </p>
        )}
        {savedArticles.length > 0 && (
          <p className="saveNews__keyword">
            By keywords:{" "}
            <span className="saveNews__keyword-description">
              {keywordDescription}
            </span>
          </p>
        )}
      </section>

      <section className="search__results">
        {isLoading ? (
          <Preloader text="Loading..." />
        ) : savedArticles.length ? (
          <ul className="search__results-list">
            {savedArticles.map((article, index) => (
              <li key={index}>
                <article>
                  <SavedNewsCard
                    news={article}
                    index={index}
                    deleteSaveNews={deleteSavedNews}
                  />
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {hasApiError
              ? "Sorry, something went wrong during the request. Please try again later."
              : "No results found"}
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default SaveNews;
