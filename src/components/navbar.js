import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-xl font-bold text-green-600">OneThrive</h1>
      <ul className="flex gap-6 text-gray-700">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="bg-lime-400 px-4 py-2 rounded font-medium">Join Now</button>
    </div>
  );
};

export default Navbar;
