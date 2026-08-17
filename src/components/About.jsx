import React from "react";

const About = () => {
  return (
    <div className="container  max-w-screen-2xl  mx-auto px-4 md:px-10 my-16 ">
      <div>
        <h1 className="text-3xl font-bold text-pink-800 mb-5">About</h1>
        <p className="text-justify">
          I’m Mahima, a CSE student and Full-Stack Developer focused on building
          responsive, scalable, and user-friendly web applications. Skilled in
          React.js, JavaScript, Node.js, Express.js, MongoDB, Java, and Tailwind
          CSS, I enjoy turning ideas into clean, efficient digital solutions
          while continuously learning and exploring new technologies.
        </p>
        <br />
        <section>
          <h1 className=" text-xl font-semibold  text-pink-500 mb-1">
            Education
          </h1>
          <article>
            <h3 className="text-lg">
              B.Tech – Computer Science & Engineering | 2027
            </h3>
            <p className="text-gray-600">Moradabad Institute of Technology</p>
            <p className="text-gray-600">CGPA: 8.1</p>
          </article>
          <br />
          <article>
            <h3 className="text-lg">Senior Secondary – 12th | 2023</h3>

            <p className="text-gray-600">AVP Inter College</p>
            <p className="text-gray-600">percentage: 77%</p>
          </article>
          <br />
          <article>
            <h3 className="text-lg">Secondary – 10th | 2021</h3>

            <p className="text-gray-600">AVP Inter College</p>
            <p className="text-gray-600">percentage: 77%</p>
          </article>
        </section>
        <br /> <br />
        <section>
          <h1 className=" text-xl font-semibold  text-pink-500">Skills</h1>
          <article>
            <h3 className="text-lg mt-1 ">Technical Skills</h3>
            <div>
              <span>Languages -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                Java, JavaScript, HTML5, CSS3, SQL.
              </span>
            </div>
            <div>
              <span>Frontend -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                React.js, Bootstrap, Tailwind CSS, Responsive UI.
              </span>
            </div>
            <div>
              <span>Backend -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                Node.js, Express.js, REST APIs, JWT Authentication, RBAC.
              </span>
            </div>
            <div>
              <span>Databases -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                MongoDB, MySQL.
              </span>
            </div>
            <div>
              <span>Tools -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                Git, GitHub, VS Code, Postman.
              </span>
            </div>
            <div>
              <span>Core Concepts -&nbsp;</span>
              <span className="text-gray-600 text-justify">
                OOP, CRUD, API Integration, Authentication & Authorization,
                Problem Solving.
              </span>
            </div>
          </article>
          <br />
          <article>
            <h3 className="text-lg mt-1">Soft Skills</h3>
            <span className="text-gray-600 text-justify">
              Communication, Teamwork, Adaptability, Time Management, Quick
              Learning, Leadership
            </span>
          </article>
        </section>
        <br /> <br />
        <section>
          <h1 className=" text-xl font-semibold  text-pink-500">Experience</h1>
          <article>
            <h3 className="text-lg mt-1">
              MERN Stack Intern — Softpro India | 2026
            </h3>
            <p className="text-gray-600 text-justify">
              Worked on full-stack web development using MongoDB, Express.js,
              React.js, and Node.js, gaining practical experience in building
              and integrating web applications.
            </p>
          </article>
        </section>
        <br /> <br />
        <section>
          <h1 className=" text-xl font-semibold  text-pink-500">Achievements</h1>
          <article>
            <h3 className="text-lg mt-1">
              Certification
            </h3>
            <p className="text-gray-600 text-justify">
           Summer Internship - Softpro India | 2026
            </p>
          </article>
        </section>
        <br /> <br />
      </div>
    </div>
  );
};

export default About;
