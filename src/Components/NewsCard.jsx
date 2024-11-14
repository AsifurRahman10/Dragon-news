import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";

export const SingleNewsCard = (props = {}) => {
  const { singleNews } = props || {};
  return (
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Author and Date */}
      <div className="p-4 flex items-center justify-between bg-[#F3F3F3] py-6">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src={singleNews.author.img}
            alt={singleNews.author.name}
          />
          <div>
            <h2 className="text-sm font-semibold">{singleNews.author.name}</h2>
            <p className="text-xs text-gray-500">
              {singleNews.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800">{singleNews.title}</h3>

        {/* Image */}
        <img
          className="w-full object-cover my-4"
          src={singleNews.image_url}
          alt="singleNews Thumbnail"
        />

        {/* Details */}
        <p className="px-4 text-gray-600 text-sm">
          {singleNews.details.length > 100
            ? `${singleNews.details.slice(0, 100)}...`
            : singleNews.details}
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>

        {/* Rating and Views */}
        <div className="p-4 flex items-center justify-between border-t mt-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(singleNews.rating.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">
              {singleNews.rating.number}
            </span>
          </div>
          <div className="flex items-center text-gray-500 space-x-1">
            <FaEye />
            <span className="text-sm">{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
