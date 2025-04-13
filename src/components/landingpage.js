import React from "react";
import HeroSection from "./herosection";
import Features from "./features";
import AppShowcase from "./showcase";
import Footer from "./footer";
import PhoneShowcase from "./phone";
import Image from '../assets/image4.png';
import Logo from '../assets/logo.png'

const LandingPage=()=>{
    return (
        <div className="bg-black text-white min-h-screen">
          {/* Header/Navigation */}
       {/* Header/Navigation */}
<header className="py-4 px-6 md:px-16 flex items-center justify-between bg-black shadow-lg shadow-lime-400/10 rounded-b-xl backdrop-blur-md border-b border-gray-800">
  <div className="flex items-center">
    <img
      src={Logo} // Make sure Company is imported, e.g. `import Company from '../assets/company.png'`
      alt="OneThrive Logo"
      className="h-35" // Adjust size as needed
    />


  </div>
  <nav className="md:flex space-x-6">
    <a href="#" className="text-white hover:text-lime-400">Home</a>
    <a href="#" className="text-white hover:text-lime-400">About</a>
    <a href="#" className="text-white hover:text-lime-400">Services</a>
    <a href="#" className="text-white hover:text-lime-400">Contact</a>
  </nav>
  <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-lime-300 transition">
    Get Started
  </button>
</header>

        <HeroSection />
        <PhoneShowcase />
        <Features />
        <AppShowcase />
        <section className="bg-white py-20 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img 
              src={Image} 
              alt="OneThrive Platform" 
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-100 rounded-full -z-10 -mt-10 -mr-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Empower Your Team, 
              Elevate Your Business
            </h2>
            <p className="text-gray-600 mb-6">
              At OneThrive, we believe that the key to organizational 
              success lies in the strength of your team. That's why we've
              developed a comprehensive suite of team-building activities
              and workshops that are designed to bring your employees
              together and foster a culture of collaboration and innovation.
            </p>
            <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <Footer />
          </div>
    );

}

export default LandingPage;