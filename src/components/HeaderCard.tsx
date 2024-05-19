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
          <div className=" flex" key={index}>
            <img
              className=" w-[600px] h-[400]"
              src={headline.urlToImage}
              alt=""
            />
            ;<h1>{headline.title}</h1>;<h3>{headline.description}</h3>;
          </div>
        );
      })}
    </>
  );
};

export default HeaderCard;
