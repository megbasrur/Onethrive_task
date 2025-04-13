import React, { useState } from "react";
import Company from '../assets/company.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Company, Hero2, Hero3];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div>
      <section className="bg-black text-white py-20 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Text Section */}
          <div className="max-w-xl animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-2s">
              OneThrive: <br /> Empowering Teams, <br /> Igniting Growth
            </h1>

            <p className="text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-3s">
              At OneThrive, we believe that team building is the foundation for
              organizational success. Our innovative activities and workshops help
              companies foster a collaborative, engaged culture.
            </p>

            <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-300 hover:scale-105 transition-transform duration-300">
              Explore Now
            </button>
          </div>

         
          <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-4s">
  <div className="relative w-full overflow-hidden">
    <div className="relative w-full">
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out opacity-90 hover:opacity-100"
      />
    </div>

    {/* Left Arrow */}
    <button
      onClick={goToPreviousSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white text-2xl p-2 rounded-full hover:bg-gray-700 focus:outline-none"
    >
      &#8249;
    </button>

    {/* Right Arrow */}
    <button
      onClick={goToNextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white text-2xl p-2 rounded-full hover:bg-gray-700 focus:outline-none"
    >
      &#8250;
    </button>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;


/*
    <section className="bg-  text-white py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            OneThrive: <br /> Empowering Teams, <br /> Igniting Growth
          </h1>
          <p className="text-gray-300 mb-8">
            At OneThrive, we believe that team building is the foundation for
            organizational success. Our innovative activities and workshops help
            companies foster a collaborative, engaged culture.
          </p>
          <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition">
            Explore Now
          </button>
        </div>
        <div>
          <img
            src="/assets/laptop-feature.png"
            alt="Laptop Feature"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );*/