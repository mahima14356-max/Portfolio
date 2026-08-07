import React from "react";
import img from "../assets/image.jpeg";
import { FaFacebook import { BsLinkedin } from "react-icons/bs";AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="container  max-w-screen-2xl  mx-auto px-4 md:px-10 my-40 ">
        <div className="flex flex-row justify-between">
          <div className="md:w-1/2 mt-12 md:mt-24">
            <span className="text-xl">Welcome to my portfolio</span>
            <div className="flex gap-1 text-2xl md:text-4xl">
              <h1>Hi, I'm a</h1>
              <span className="text-red-700 font-bold">Developer</span>
            </div> <br/>
            <p className="text-sm md:text-md text-jusyify">
              I'm Mahima, 
              A Computer Science student and aspiring MERN Stack
              Developer. I enjoy building responsive web applications using
              React, Tailwind CSS, Node.js, Express.js, and MongoDB. I'm
              passionate about creating clean, intuitive user experiences and
              continuously expanding my knowledge through real-world projects
              and hands-on learning.
            </p> <br/> 
            {/* social media handle <FaFacebook /> */}
            <h1>Available on</h1>
              < 
          </div>
          <div className="md:w-1/2">
            <img
              src={img}
              alt="picture"
              className="h-50 w-50 rounded-full border-3 border-pink-900"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
