import React from "react";
import logo from '../assets/nav-logo.jpg'

const Navbar = () => {
  return (
    <>
      <div className="container max-w-screen-2xl h-16 mx-auto px-4 md:px-20  text-pink-700 bg-pink-300 rounded">
        <div>
          <div className="flex space-x-2">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-full mt-3" />
            <h1 className="font-semibold text-xl cursor-pointer ">Mahima
              <p>Web Developer</p>
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div> <hr className="text-pink-500" />
    </>
  );
};

export default Navbar;
