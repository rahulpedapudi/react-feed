import data from "../data";
import "../newscard.css";
const NewsCard = () => {
  const newsArticles = data.articles;
  return (
    <>
      {newsArticles.map((newsContent) => {
        return (
          <div className="newsContainer">
            <div className="img-container">
              <img
                className="news-image"
                src={
                  newsContent.urlToImage ||
                  "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                }
                alt=""
              />
            </div>
            <div className="content">
              <h1>
                <a className="nostyle" target="_blank" href={newsContent.url}>
                  {newsContent.title}
                </a>
              </h1>
              <p>{newsContent.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
