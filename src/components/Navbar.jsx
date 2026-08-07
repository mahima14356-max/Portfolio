import React, { useState } from "react";
import logo from "../assets/nav-logo.jpg";
import { GrMenu } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  
  const navLinks = [ {id:1,text:"Home"},
    {id:2, text:"About"},
    {id:3, text:"Portfolio"},
    {id:4, text:"Experience"},
    {id:5, text:"Contact"} ];
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="container  max-w-screen-2xl  mx-auto px-4 md:px-10 h-16 fixed top-0 left-0 right-0 text-white bg-pink-300 shadow-md shadow-pink-800/50">
        <div className=" flex justify-between items-center ">
          <div className="flex space-x-2">
            <img
              src={logo}
              alt="logo"
              className="h-13 w-13 mt-1 rounded-full "
            />
            <h1 className="font-semibold text-xl mt-1 cursor-pointer ">
              Mahim<span className="text-pink-800">a</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 ">
              { navLinks.map(({id,text}) => (
                  <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
              ))} 
            </ul>
          <button
              onClick={() => { setMenu(!menu); }}
              className="md:hidden mt-2 ">
              {menu ? <IoMdCloseCircleOutline size={24} /> : <GrMenu size={24} />
              }
            </button>
          </div>
        </div>
         {/* mobile navbar */}
        {menu && (
            <ul className="sm:hidden flex flex-col h-screen space-y-4 text-2xl font-semibold items-center  justify-center text-pink-800">
               { navLinks.map(({id, text}) => (
                  <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
              ))} 
            </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
