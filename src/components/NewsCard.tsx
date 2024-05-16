import "../newscard.css";

// type for article (data fetched by api)
type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

// type for props, which is received by NewsCard. (array of articles)
type NewsCardProps = {
  fetchedData: Article[];
};

// TODO: Add Source/ Author of each article
const NewsCard = ({ fetchedData }: NewsCardProps) => {
  return (
    <>
      {/* mapping through each article and rendering  */}
      {fetchedData.map((newsContent: any, index: number) => {
        return (
          <div key={index} className="newsContainer">
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
