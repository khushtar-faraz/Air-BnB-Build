import {
  BeakerIcon,
  BriefcaseIcon,
  CalendarIcon,
  DesktopComputerIcon,
  FireIcon,
  HomeIcon,
  LocationMarkerIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import HorizontalDivider from "./components/HorizontalDivider";

function ListedStay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const noOfGuests = queryParams.get("noOfGuests");
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const description = queryParams.get("description");
  const title = queryParams.get("title");
  const star = queryParams.get("star");
  const price = queryParams.get("price");
  const total = queryParams.get("total");
  const navigate=useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:px-[10px] md:px-[25px] lg:px-[40px] mx-4 md:mx-8">
      <div className=" pt-[24px]">
        <h1 className="text-[26px] font-[600]">{title}</h1>
        <div className="mt-2 mb-8">
          <span className="flex items-center">
            <StarIcon className="text-red-400 h-5" />
            <p className="pl-[5px] font-[600]">{star} |</p>
            <p className="pl-[7px] underline underline-offset-4 font-[600]">
              14 reviews
            </p>
          </span>
        </div>
      </div>
      <div className="grid gap-2 w-auto h-auto rounded-3xl mt-4 overflow-hidden">
        <div className="col-start-1 col-span-2 row-start-1 row-span-2 relative">
          <img
            className="h-full"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-36652405/original/f33b9f59-0ca7-4374-84ba-d43b9ba5b95f.jpeg?im_w=960"
            alt=""
          />
        </div>
        <div className="col-start-3 col-end-4">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-36652405/original/4cd8a5ab-f672-463a-a157-f84f2a8cdc26.jpeg?im_w=720"
            alt=""
          />
        </div>
        <div className="col-start-4 col-end-5">
          <img
            src="https://a0.muscache.com/im/pictures/45034127/10eaca23_original.jpg?im_w=720"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-36652405/original/c69d9c0c-702c-44d0-9089-f59779266c55.jpeg?im_w=720"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/45034063/55bd40c3_original.jpg?im_w=720"
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-8">
        <div className="grow">
          <h2 className="font-[600] text-[22px]">
            Private room in rental unit hosted by Sophie
          </h2>
          <p className="text-gray-700 mb-8">{description}</p>
          <HorizontalDivider />
          <div className="mt-8 mb-8">
            <div className="flex mb-6">
              <div>
                <BriefcaseIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="pl-4">
                <h3 className="text-[16px] leading-[20px] font-[500] mb-[4px]">
                  Dedicated workspace
                </h3>
                <p className="text-gray-400">
                  A private room with wifi that’s well suited for working.
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <div>
                <LocationMarkerIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="pl-4">
                <h3 className="text-[16px] leading-[20px] font-[500] mb-[4px]">
                  Great location
                </h3>
                <p className="text-gray-400">
                  91% of recent guests gave the location a 5-star rating.
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <div>
                <CalendarIcon className="w-[24px] h-[24px]" />
              </div>
              <div className="pl-4">
                <h3 className="text-[16px] leading-[20px] font-[500] mb-[4px]">
                  Free cancellation for 48 hours.
                </h3>
              </div>
            </div>
          </div>
          <HorizontalDivider />
          <div className="mt-10 mb-16">
            <h2 className="font-[600] text-[22px]">Where you'll sleep</h2>
            <div className="mt-4 border-[#dddddd] border-[1px] rounded-[12px] p-6 w-[65%]  ">
              <div>
                <HomeIcon className="w-[24px] h-[24px] mb-6" />
              </div>
              <h3 className="text-[16px] leading-[20px] font-[500] mb-[4px]">
                Bedroom
              </h3>
              <p className="text-black font-[200]">1 single bed</p>
            </div>
          </div>
          <HorizontalDivider />
          <div className="mt-10 mb-16">
            <h2 className="font-[600] text-[22px] mb-6">
              What this place offers
            </h2>
            <div className="grid grid-cols-2">
              <div className="flex mb-4">
                <div>
                  <BeakerIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">Kitchen</p>
              </div>
              <div className="flex mb-4">
                <div>
                  <BriefcaseIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">Dedicated Workspace</p>
              </div>
              <div className="flex mb-4">
                <div>
                  <DesktopComputerIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">TV</p>
              </div>
              <div className="flex mb-4">
                <div>
                  <FireIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">Firepit</p>
              </div>
              <div className="flex mb-4">
                <div>
                  <WifiIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">Wifi</p>
              </div>
              <div className="flex mb-4">
                <div>
                  <CalendarIcon className="w-[24px] h-[24px]" />
                </div>
                <p className="pl-4">Longterm Stays Allowed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-auto">
          <div className="w-[55%] border-[#dddddd] border-[1px] rounded-[12px] h-auto ml-auto p-[24px] shadow-lg sticky top-28">
            <span className="flex items-center pb-6">
              <p className="font-[700] text-[22px]">£{price}</p>
              <p className="pl-[4px] text-[16px] font-[400] pb-0 text-[#222222]">
                night
              </p>
            </span>
            <div className="grid grid-rows-2 grid-cols-2 border-[black] border-[1px] rounded-[12px]">
              <div className="col-start-1 col-span-1 border-[black] border-b-[1px] border-r-[1px] px-[12px] pt-[26px] pb-[10px]">
                <div className="text-[12px] font-[700]">CHECK-IN</div>
                <div className="text-[14px] text-[#000000] font-[200]">
                  {formattedStartDate}
                </div>
              </div>
              <div className="col-start-2 col-span-1 border-[black] border-b-[1px] px-[12px] pt-[26px] pb-[10px]">
                <div className="text-[12px] font-[700]">CHECKOUT</div>
                <div className="text-[14px] text-[#000000] font-[200]">
                  {formattedEndDate}
                </div>
              </div>
              <div className="col-start-1 col-span-2 pt-[26px] pr-[36px] pb-[10px] pl-[12px]">
                <div className="text-[12px] font-[700]">GUESTS</div>
                <div className="text-[14px] text-[#000000] font-[200]">
                  {noOfGuests} guests
                </div>
              </div>
            </div>
            <button className="text-white bg-[#FF385C] w-full my-4 p-4 rounded-lg">
              Reserve
            </button>
            <p className="text-[14px] text-[#000000] text-center">
              You won't be charged yet
            </p>
            <HorizontalDivider />
            <div className="flex justify-between w-full mt-2">
              <div className="text-[16px] text-[#222222] font-[600]">Total</div>
              <div className="text-[16px] text-[#222222] font-[600]">£{total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListedStay;
