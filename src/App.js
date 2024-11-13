import React, { useState } from "react";
import "./App.css";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4">
      {/* Navbar */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="flex-shrink-0">
            <img src="logo.jpg" alt="logo" />
          </div>
          
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
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

          <div className="hidden md:flex items-center gap-5">
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


          <div className="md:hidden flex items-center">
            <HiMenu
              className="w-8 h-8 cursor-pointer"
              onClick={toggleMenu} 
            />
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
            <ul className="flex flex-col text-[#717171]">
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
        )}
      </header>

      {/* Search Filter */}
      <div className="px-4 sm:px-8 py-1 my-3 text-sm md:border md:border-[#DDDDDD] md:rounded-full max-w-2xl mx-auto shadow-md">
        <div className="flex flex-wrap justify-between items-center px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 gap-4 sm:gap-20 w-full sm:w-auto">
            <div className="w-full sm:w-24 border-b sm:border-b-0 sm:border-r border-[#DDDDDD]">
              <h3 className="text-black font-semibold">Where</h3>
              <input
                type="text"
                placeholder="Anywhere"
                className="text-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
            <div className="w-full sm:w-24 border-b sm:border-b-0 sm:border-r border-[#DDDDDD]">
              <h3 className="text-black font-semibold">When</h3>
              <input
                type="text"
                placeholder="Week in"
                className="text-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
            <div className="w-full sm:w-24">
              <h3 className="text-black font-semibold">Who</h3>
              <input
                type="text"
                placeholder="Add guests"
                className="text-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="bg-[#69A0EE] text-white rounded-full px-3 py-2 mt-2 sm:mt-0">
            <button><FaSearch className="text-xl" /></button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="rounded-lg overflow-hidden relative shadow-lg"
          >
            <div className="relative">
              <img
                src={listing.img}
                alt={listing.location}
                className="w-full h-60 object-cover"
              />
              <FaHeart className="absolute top-3 right-3 text-2xl rounded-full p-1 cursor-pointer hover:text-red-500 text-gray-400" />
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
        <div className="container mx-auto flex flex-wrap justify-between gap-4 text-sm">
          <p className="text-[#717171]">
            &copy; 2022 Airbnb, Inc. · Privacy · Terms · Sitemap · Company
            details · Destinations
          </p>
          <div className="text-black flex gap-6">
            <p>English (IN)</p>
            <p>INR</p>
            <p>Support & resources</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
