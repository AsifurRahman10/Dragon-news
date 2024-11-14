import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const LeftAsideNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data.news_category);
      });
  }, []);
  //   {
  //     "category_id": "01",
  //     "category_name": "Breaking News"
  // }
  return (
    <div>
      <p className="text-[#403F3F] font-semibold">All Category</p>
      <div className="flex flex-col mt-8">
        {category.map((item) => (
          <NavLink
            to={`/category/${item.category_id}`}
            key={item.category_id}
            className="px-6 py-4 rounded-md"
          >
            {item.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
