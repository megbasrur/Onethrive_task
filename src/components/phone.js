import React from "react";
import Phone1 from "../assets/phone.png";
import Phone2 from "../assets/phone.png";

const PhoneShowcase = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 mt-[-20px]">
        <hr className= "mb-5" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        
        {/* Phone images */}
        <div className="relative w-full md:w-1/2 h-96 transition-transform duration-500 hover:rotate-6">
          <img
            src={Phone1}
            alt="Phone 1"
            className="absolute top-0 left-20 w-80 z-10 shadow-2xl rounded-xl"
          />
          <img
            src={Phone2}
            alt="Phone 2"
            className="absolute top-10 left-10 w-80 z-0 shadow-2xl rounded-xl "
          />
        </div>

        {/* Text content */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Team’s Potential with OneThrive
          </h2>
          <p className="text-gray-300 mb-6">
            Unlock your team’s true potential with our expertly designed team building activities and workshops.
          </p>
          <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhoneShowcase;


