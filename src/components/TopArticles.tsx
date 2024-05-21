import TopCard from "./TopCard";
type NewsCardProps = {
  data: {
    title: string;
    source: { id: string; name: string };
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
  }[];
};

const TopArticles = ({ data }: NewsCardProps) => {
  return (
    <section className="bg-red mx-24 grid h-[200px] grid-cols-3 gap-x-5">
      {data.map((article, index) => {
        return (
          <>
            <TopCard
              key={index}
              headline={article.title}
              imageURL={article.urlToImage}
              author={article.author}
              source={article.source.name}
            />
          </>
        );
      })}
    </section>
  );
};

export default TopArticles;
