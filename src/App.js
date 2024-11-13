import "./App.css";
import React from "react";
import {
  FaSearch,
  FaUserCircle,
  FaGlobe,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const listings = [
  {
    id: 1,
    location: "MV, Maldives",
    distance: "7,276 kilometers away",
    price: "Rs. 83,996 night",
    rating: "4.8",
    img: "144.png",
  },
  {
    id: 2,
    location: "Kastraki, Greece",
    distance: "8,540 kilometers away",
    time: "23-28 June",
    price: "Rs. 16,121 night",
    rating: "3.4",
    img: "145.png",
  },
  {
    id: 3,
    location: "Kastraki, Greece",
    distance: "8,540 kilometers away",
    time: "23-28 June",
    price: "Rs. 16,121 night",
    rating: "3.4",
    img: "146.png",
  },
  {
    id: 4,
    location: "Kastraki, Greece",
    distance: "8,540 kilometers away",
    time: "23-28 June",
    price: "Rs. 16,121 night",
    rating: "3.4",
    img: "147.png",
  },
  {
    id: 5,
    location: "Kastraki, Greece",
    distance: "8,540 kilometers away",
    time: "23-28 June",
    price: "Rs. 16,121 night",
    rating: "3.4",
    img: "148.jpg",
  },
];

export default function ListingPage() {
  return (
    <div className="p-4">
      {/* Navbar */}
      <header className="py-4 flex justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="logo.jpg" alt="logo" />
          </div>
          <div>
            <ul className="flex gap-[24px] text-[#717171]">
              <li className="hover:text-black hover:underline cursor-pointer">
                Stays
              </li>
              <li className="hover:text-black hover:underline cursor-pointer">
                Experiences
              </li>
              <li className="hover:text-black hover:underline cursor-pointer">
                Online Experiences
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-sm font-medium">Become a host</button>
            <FaGlobe className="w-6 h-6" />
            <div className="flex items-center gap-2 p-2 border rounded-full">
              <HiMenu className="w-5 h-5" />
              <div className="relative">
                <FaUserCircle className="w-6 h-6 text-gray-500" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Filter */}
      <div className="px-8 py-1 my-3 text-sm border border-[#DDDDDD] rounded-full max-w-2xl mx-auto shadow-md">
        <div className="flex justify-between items-center px-4">
          <div className="flex space-x-4 gap-20">
            <div className="w-24 border-r border-[#DDDDDD]">
              <h3 className="text-black font-semibold">Where</h3>
              <p className="text-gray-500">Anywhere</p>
            </div>
            <div className="w-24 border-r border-[#DDDDDD]">
              <h3 className="text-black font-semibold">When</h3>
              <p className="text-gray-500">Week in</p>
            </div>
            <div className="w-24">
              <h3 className="text-black font-semibold">Who</h3>
              <p className="text-gray-500">Add guests</p>
            </div>
          </div>
          <div className="bg-[#69A0EE] text-white rounded-full p-3 ml-[90px]">
            <FaSearch className="text-xl" />
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="rounded-lg overflow-hidden relative w-[313px] shadow-lg"
          >
            <div className="relative">
              <img
                src={listing.img}
                alt={listing.location}
                className="w-[313px] h-[313px] object-cover"
              />
              <FaHeart className="absolute top-3 right-3  text-2xl  rounded-full p-1 cursor-pointer  hover:text-red-500 text-gray-400 " />
            </div>

            
            <div className="p-4">
              <h3 className="font-medium text-lg">{listing.location}</h3>
              <p className="text-gray-600 text-sm">{listing.distance}</p>
              <p className="text-gray-600 text-sm">{listing.time}</p>
              <p className="text-gray-800 font-semibold">{listing.price}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500 text-sm mr-1" />
                <span className="text-sm font-medium">{listing.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="pt-6">
        <div className="border-t-2 border-gray-200 mb-4"></div>
        <div className="container mx-auto flex justify-between">
          <p className="text-[#717171]">
            &copy; 2022 Airbnb, Inc. · Privacy · Terms · Sitemap · Company
            details · Destinations
          </p>
          <div className="text-sm text-black flex gap-6">
            <p>English (IN)</p>
            <p>INR</p>
            <p>Support & resources</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
