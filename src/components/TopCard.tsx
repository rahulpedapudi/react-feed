type TopArticleProps = {
  headline: string;
  imageURL: string;
  author: string;
  source: string;
};

const TopCard = (props: TopArticleProps) => {
  return (
    <div className="flex gap-5 border-[1.5px] border-black">
      <div className="h-[200px] w-[300px]">
        <img
          className=" object-cover w-full h-full"
          src={props.imageURL}
          alt=""
        />
      </div>
      <div className="flex-wrap content-center">
        <h1 className=" mb-4 font-body text-xl">{props.headline}</h1>
        <h4 className=" font-semibold font-body text-xs">{props.author}</h4>
        <h4 className=" opacity-70 font-body text-xs">{props.source}</h4>
      </div>
    </div>
  );
};

export default TopCard;
