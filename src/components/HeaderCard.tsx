type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

type HeaderProps = {
  data: Article[];
};
const HeaderCard = ({ data }: HeaderProps) => {
  return (
    <>
      {data.map((headline, index) => {
        return (
          <div key={index}>
            <img src={headline.urlToImage} alt="" />;<h1>{headline.title}</h1>;
            <h3>{headline.description}</h3>;
          </div>
        );
      })}
    </>
  );
};

export default HeaderCard;
