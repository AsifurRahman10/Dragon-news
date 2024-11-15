import { Link, useLoaderData } from "react-router-dom";
import { Header } from "../Components/Header";
import { RightAsideNav } from "../Components/AsideNav/RightAsideNav";
import { FaArrowLeft } from "react-icons/fa";

export const NewsDetails = () => {
  const newsData = useLoaderData();
  const newDetails = newsData.data[0];
  return (
    <div className="my-10">
      <header className="">
        <Header></Header>
      </header>
      <main className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-12 mt-8 gap-6">
        <section className="col-span-9">
          <h3 className="text-2xl font-bold">Dragon News</h3>
          <div className="mt-4">
            <div className="card bg-base-100 shadow-xl p-8">
              <figure className="">
                <img
                  src={newDetails.image_url}
                  alt="Shoes"
                  className="rounded-sm w-full"
                />
              </figure>
              <div className="card-body px-0 space-y-2">
                <h2 className="card-title">{newDetails.title}</h2>
                <p className="text-[#706F6F]">{newDetails.details}</p>
                <div className="card-actions">
                  <Link to={"/"}>
                    <button className="btn bg-[#D72050] text-white rounded-none">
                      <FaArrowLeft /> All news in this category
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <aside>
            <RightAsideNav></RightAsideNav>
          </aside>
        </section>
      </main>
    </div>
  );
};
