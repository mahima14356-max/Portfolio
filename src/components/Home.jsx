import React from "react";
import { ReactTyped } from "react-typed";
import img from "../assets/image.jpeg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="container  max-w-screen-2xl  mx-auto px-4 md:px-10 my-30 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl ">Welcome to my portfolio</span>
            <div className="flex gap-1 text-2xl md:text-4xl">
              <h1>Hi, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmar", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I'm Mahima, A Computer Science student and aspiring MERN Stack
              Developer. I enjoy building responsive web applications using
              React, Tailwind CSS, Node.js, Express.js, and MongoDB. I'm
              passionate about creating clean, intuitive user experiences and
              continuously expanding my knowledge through real-world projects
              and hands-on learning.
            </p>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
              {/* social media handle  */}
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex gap-2">
                  <li className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200">
                    <a
                      href="https://www.linkedin.com/in/mahima-singh-b16053291" aria-label="Visit Mahima's Linkedin profile"
                      target="_blank" rel="noopener noreferrer"
                    >
                    <FaLinkedin /></a>
                  </li>
                  <li className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200">
                    <a
                      href="https://github.com/mahima14356-max"
                      target="_blank"
                      rel="noopener noreferrer"  aria-label="Visit Mahima's GitHub profile"
                    >
                    <FaGithub /></a>
                  </li>
                  <li className="text-2xl  md:text-3xl cursor-pointer hover:scale-110 duration-200">
                    <a
                      href="https://leetcode.com"
                      target="_blank" aria-label="Visit Mahima's LeetCode profile"
                      rel="noopener noreferrer"
                    >
                    <SiLeetcode /></a>
                  </li>
                </ul>
              </div>

              {/* skills handle  */}
              <div className="space-y-2">
                <h1 className="font-bold">Working on</h1>
                <div className=" flex flex-row space-x-2">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 bg-amber-100" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 bg-amber-50" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 bg-blue-50" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 bg-green-50" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-18 flex justify-center md:justify-evenly order-1">
            <img
              src={img}
              alt="picture"
              className=" w-35  h-35 md:h-60 md:w-60 rounded-full border-3 border-pink-800"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
