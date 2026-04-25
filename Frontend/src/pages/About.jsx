import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      delay={2}
      duration={2}
      className=" flex flex-col items-center justify-center  p-6 "
    >
      <div className="max-w-2xl text-center bg-red-500">
        <h1 className="text-4xl font-bold mb-4 text-white">Hey there 👋</h1>
        <p className="text-lg leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-blue-600">Rupesh Rauniyar</span>,
          a passionate{" "}
          <span className="font-semibold">full-stack web developer</span>
          from <span className="font-semibold">Nepal</span>. I love building
          modern, responsive, and creative web applications using technologies
          like <span className="font-semibold">React, Node.js, Express,</span>
          and <span className="font-semibold">MongoDB</span>.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I’m a <span className="font-semibold">16-year-old student</span>{" "}
          currently pursuing
          <span className="font-semibold"> Science in Grade 11</span>. Alongside
          my studies, I’m constantly learning and improving my skills in web
          development, animations, and backend systems.
        </p>
        <p className="mt-4 text-lg">
          My goal is to create user-friendly, efficient, and visually appealing
          web experiences that make a difference 🌍.
        </p>
        <Link to="/">Home</Link>
      </div>
    </motion.div>
  );
};

export default About;
