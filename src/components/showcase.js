import React from 'react';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';


const AppShowcase = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="mb-12">
        <h2 className="text-lime-400 text-3xl md:text-4xl font-bold mb-6">
          Revolutionize Your<br />Team's Potential
        </h2>
        <p className="text-gray-300 max-w-xl">
          Discover how OneThrive's team building solutions can
          unlock the full power of your workforce and drive
          organizational success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {/* First Card */}
        <div className="w-full md:w-1/3 transition-transform transform hover:scale-105 duration-300
">
          <div className="border border-gray-800 rounded-lg p-6 mb-6">
            <img src={Image3} alt="App Image" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <div className="flex items-center mb-4">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">OneThrive App</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the power of team-building in the palm
              of your hand with the OneThrive App. Track growth,
              manage activities, view workshops, and access
              educational resources.
            </p>
            <button className="text-lime-400 font-semibold">Download Now</button>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-1/3 transition-transform transform hover:scale-105 duration-300
">
          <div className="border border-gray-800 rounded-lg p-6 mb-6">
            <img src={Image1} alt="Explore Image" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <div className="flex items-center mb-4">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Explore</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Discover how OneThrive's team-building solutions can
              elevate your workforce culture and unlock the full
              potential of your team.
            </p>
            <button className="text-lime-400 font-semibold">Get Started</button>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full md:w-1/3 transition-transform transform hover:scale-105 duration-300
">
          <div className="border border-gray-800 rounded-lg p-6 mb-6">
            <img src={Image2} alt="Connect Image" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <div className="flex items-center mb-4">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Connect</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Schedule performance with OneThrive's expert team-building activities. Our comprehensive
              suite of activities and workshops are designed to foster
              collaboration.
            </p>
            <button className="text-lime-400 font-semibold">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;


/*<section className="bg-black text-white py-20 px-6 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-lime-400 text-xl font-semibold mb-3">Revolutionize Your Team’s Potential</h2>
          <p className="text-white text-3xl font-bold mb-6 leading-snug">
            Discover how OneThrive’s team building solution can unlock the full power of your workforce and drive growth.
          </p>

          <div className="space-y-6">
            <div className="border border-lime-400 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">OneThrive App</h3>
              <p className="text-gray-300 mb-4">
                Packed with interactive activities, virtual workshops, and real-time collaboration tools.
              </p>
              <a href="#" className="text-lime-400 hover:underline">Download Now</a>
            </div>

            <div className="border border-lime-400 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-gray-300 mb-4">
                Unlock hidden team potential and ignite collaboration.
              </p>
              <a href="#" className="text-lime-400 hover:underline">Get Started</a>
            </div>

            <div className="border border-lime-400 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-300 mb-4">
                Boost performance with insights and powerful collaboration tools.
              </p>
              <a href="#" className="text-lime-400 hover:underline">Explore Now</a>
            </div>
          </div>
        </div>

        {/* Phone Mockups */
        /*<div className="flex justify-center relative">
          <img
            src="/images/phone-front.png"
            alt="App Front"
            className="w-40 sm:w-48 lg:w-52 z-10"
          />
          <img
            src="/images/phone-back.png"
            alt="App Back"
            className="w-40 sm:w-48 lg:w-52 absolute left-24 top-10 z-0"
          />
        </div>
      </div>
    </section>
  );
};
*/