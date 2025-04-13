import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        <div className="flex items-center mb-4 md:mb-0">
        <span className="text-white font-bold text-xl">
  One
</span>
<span className="text-lime-400 font-bold text-xl">
  Thrive
</span>
        </div>
        <p className="text-gray-400 text-center md:text-left">
          © 2025 OneThrive. All rights reserved.
        </p>
      </div>

      <div className="mt-6 md:mt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            <a href="#" className="text-lime-400 hover:text-lime-300 mr-4">
              About Us
            </a>
            <a href="#" className="text-lime-400 hover:text-lime-300 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-lime-400 hover:text-lime-300">
              Terms of Service
            </a>
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-center">
          <p className="text-gray-500 text-sm">
            Follow us on{" "}
            <a href="#" className="text-lime-400 hover:text-lime-300">
              Twitter
            </a>,{" "}
            <a href="#" className="text-lime-400 hover:text-lime-300">
              LinkedIn
            </a>,{" "}
            <a href="#" className="text-lime-400 hover:text-lime-300">
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
