import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import axios from "./axios";
import SmallCard from "./components/SmallCard";
import BigCard from "./components/BigCard";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";

function App() {
  const [exploreData, setExploreData] = useState([]);
  const [bigCardData, setBigCardData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/fetchExploreData")
        .then((res) => {
          setExploreData(res.data);
        })
        .catch((err) => console.log(err.message));
      axios
        .get("/fetchBigCardData")
        .then((res) => {
          setBigCardData(res.data);
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="">
              <Header />
              <Banner />
              <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="mt-10">
                  <h2 className="text-4xl font-semibold pb-5">
                    Explore Nearby
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {exploreData?.map(({ img, location, distance }) => (
                      <SmallCard
                        img={img}
                        key={img}
                        location={location}
                        distance={distance}
                      />
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
                  <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
                    {bigCardData?.map(({ img, title }) => (
                      <BigCard key={img} img={img} title={title} />
                    ))}
                  </div>
                </section>
                <LargeCard
                  img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
                  title="The Greatest Outdoors"
                  description="Wishlists curated by Airbnb."
                  buttonText="Get Inspired"
                />
              </main>
              <Footer />
            </div>
          </>
        }
      />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
