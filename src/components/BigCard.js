import React from "react";

function BigCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <img src={img} alt="" className="absolute h-full w-full rounded-xl"/>
          </div>
          <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default BigCard;
