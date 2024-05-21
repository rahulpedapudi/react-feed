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
const HeaderCard = ({ data }: NewsCardProps) => {
  return (
    <>
      <section className="my-6 mx-24 flex h-[600px] gap-6 font-body">
        {data.length > 0 ? (
          <div className=" relative flex-1">
            <img
              className=" brightness-50	 object-fit w-full h-full"
              src={data[0].urlToImage}
              alt=""
            />
            <div className="absolute left-10  bottom-24  pr-[300px] ">
              <h1 className="drop-shadow-xl cursor-default	 text-white text-4xl">
                {data[0].title}
              </h1>
            </div>
            <div className=" text-white absolute right-16 bottom-24">
              <a
                className="italic cursor-pointer hover:underline underline-offset-8"
                target="_blank"
                href={data[0].url}>
                Read More {">"}
              </a>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
        <div className="w-96 p-8  border-black border-[1.5px] mx-auto">
          {data.slice(1).map((headline, index) => {
            return (
              <div key={index}>
                <h1 className="cursor-pointer hover:underline underline-offset-6 mb-2 text-xl">
                  <a target="_blank" href={headline.url}>
                    {index + 1}. {headline.title}
                  </a>
                </h1>
                <div className="mb-6  italic text-xs flex justify-between">
                  <div className="flex gap-3">
                    {headline.author ? (
                      <h4 className="cursor-default font-semibold">
                        {headline.author}
                      </h4>
                    ) : null}

                    <h4 className="cursor-default opacity-65">
                      {headline.source.name}
                    </h4>
                  </div>
                  <h4 className=" cursor-default opacity-65">
                    {headline.publishedAt.slice(0, 10)}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HeaderCard;
