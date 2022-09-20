import axios from "./axios";
import { getCenter } from "geolib";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Mapbox from "./components/Mapbox";

function Search() {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const input = queryParams.get("input");
  const noOfGuests = queryParams.get("noOfGuests");
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const noOfDays =
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 3600 * 24) +
    1;
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    const fetchData = () => {
      if (input.trim().toLowerCase() === "london") {
        axios
          .get("/fetchSearchDataLondon")
          .then((res) => {
            setSearchData(res.data);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          })
          .catch((err) => console.log(err.message));
      } else {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const coordinates = searchData.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);
  console.log(center);
  console.log(loading);

  return (
    <div>
      <Header placeholder={`${input} | ${range} | ${noOfGuests} guests`} searchDisabled/>
      <main className="flex">
        {!loading && searchData.length > 0 && (
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs">
              300+ Stays : {range} for {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {input}
            </h1>
            <div className="flex">
              <div className="flex flex-col">
                {searchData?.map(
                  ({ img, location, title, description, star, price }) => (
                    <InfoCard
                      key={img}
                      img={img}
                      location={location}
                      title={title}
                      description={description}
                      star={star}
                      price={price}
                      noOfDays={noOfDays}
                      noOfGuests={noOfGuests}
                      startDate={startDate}
                      endDate={endDate}
                    />
                  )
                )}
              </div>
              <section className="hidden xl:inline-flex xl:min-w-[400px]">
                {center && (
                  <Mapbox searchResults={searchData} center={center} />
                )}
              </section>
            </div>
          </section>
        )}
        {loading && (
          <h1 className="text-5xl flex mx-auto my-[20vh] h-[500px]">
            Loading....
          </h1>
        )}
        {!loading && searchData.length === 0 && (
          <h1 className="text-5xl flex mx-auto my-[20vh] h-[500px] text-red-600">
            ❗ Please enter a valid Place
          </h1>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Search;
