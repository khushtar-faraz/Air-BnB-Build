import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  noOfDays,
  noOfGuests,
  startDate,
  endDate,
}) {
  const navigate = useNavigate();
  let resultantTotal=Math.round(price * noOfDays * noOfGuests);

  const handleClick = () => {
    navigate({
      pathname: "/search/listedstay",
      search: `?noOfGuests=${noOfGuests}&startDate=${startDate}&endDate=${endDate}&location=${location}&title=${title}&description=${description}&star=${star}&price=${price}&noOfDays=${noOfDays}&total=${
        resultantTotal
      }`,
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 flex-grow text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="text-red-400 h-5" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              £{price} / night
            </p>
            <p className="text-right font-extralight">
             {`£${resultantTotal} Total`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
