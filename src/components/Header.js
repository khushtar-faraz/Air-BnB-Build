import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Link, useNavigate } from "react-router-dom";

function Header({ placeholder, searchDisabled }) {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const navigate = useNavigate();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = (e) => {
    navigate({
      pathname: "/search",
      search: `?input=${input}&noOfGuests=${noOfGuests}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,
    });
    setInput("");
  };

  const resetInputValue = () => {
    setInput("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* left - logo  */}
      <div className="relative flex h-10 my-auto">
        <Link to="/">
          <img
            className="h-10 object-contain absolute cursor-pointer"
            src="https://links.papareact.com/qd3"
            alt=""
          />
        </Link>
      </div>

      {/* middle - search */}
      <form className="flex items-center md:border-2 rounded-full md:shadow-md py-2">
        <input
          type="text"
          value={input}
          disabled={searchDisabled}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className="flex-grow outline-none bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400"
        />
        <button onClick={handleSearch} type="submit" className="hidden" />
        <SearchIcon
          onClick={!searchDisabled && handleSearch}
          className="hidden md:inline-flex bg-red-400 text-white h-8 rounded-full p-2 md:mx-2 cursor-pointer"
        />
      </form>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {input && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow font-semibold text-2xl">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 outline-none text-red-400 text-lg"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInputValue}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
