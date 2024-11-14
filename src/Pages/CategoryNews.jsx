import { useLoaderData } from "react-router-dom";
import { SingleNewsCard } from "../Components/NewsCard";

export const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Dragon News Home</h2>
      <div className="grid grid-cols-1 gap-6">
        {news.map((singleNews) => (
          <SingleNewsCard
            key={singleNews._id}
            singleNews={singleNews}
          ></SingleNewsCard>
        ))}
      </div>
    </div>
  );
};
