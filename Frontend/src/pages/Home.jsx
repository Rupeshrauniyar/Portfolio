import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LiquidEther from "../components/LiquidEther";
import SplitText from "../components/SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BadgeCheck, Calendar } from "lucide-react";
gsap.registerPlugin(ScrollTrigger); // ✅ moved outside component

const posts = [
  { id: 1, gradient: "linear-gradient(135deg, #5227FF, #FF9FFC)", likes: 284 },
  {
    id: 2,
    gradient: "linear-gradient(45deg, #111, #5227FF 60%, #FF9FFC)",
    likes: 197,
  },
  { id: 3, gradient: "linear-gradient(180deg, #1a0a2e, #FF9FFC)", likes: 431 },
  { id: 4, gradient: "linear-gradient(225deg, #B19EEF, #5227FF)", likes: 156 },
  { id: 5, gradient: "linear-gradient(315deg, #FF9FFC, #1a0a2e)", likes: 622 },
  {
    id: 6,
    gradient: "radial-gradient(circle at 30% 70%, #5227FF, #050510)",
    likes: 88,
  },
  {
    id: 7,
    gradient: "linear-gradient(135deg, #FF9FFC, #B19EEF, #5227FF)",
    likes: 340,
  },
  {
    id: 8,
    gradient: "radial-gradient(circle at 70% 30%, #FF9FFC, #1a0a2e)",
    likes: 215,
  },
  {
    id: 9,
    gradient: "conic-gradient(from 0deg, #5227FF, #FF9FFC, #B19EEF, #5227FF)",
    likes: 509,
  },
];

const TABS = [
  "Coding Projects",
  "Editing Projects",
  "Student Life",
  "Personal Life",
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("Coding Projects");
  const [hoveredPost, setHoveredPost] = useState(null);

  // const textRef = useRef(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     textRef.current,
  //     { y: 0 }, // ✅ "from" state
  //     {
  //       y: -1000, // ✅ "to" state
  //       duration: 2,
  //       delay: 2,
  //       ease: "power2.inOut",
  //     },
  //   );
  // }, []);

  return (
    <div className="w-full h-full">
      {/* <div
        className="absolute z-20 text-white w-full bg-zinc-800 flex items-center justify-center h-[100vh] background-black"
        ref={textRef}
      >
        <SplitText className="text-[100px] font-bold" text={"RUPESH"} />
      </div> */}

      <div
        className="relative"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundColor: "#000000",
        }}
      >
        {/* <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={100}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={true}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.6}
        /> */}
        <div className="bg-black text-white min-h-screen max-w-[600px] mx-auto border-x border-[#2f3336] font-sans">
          {/* Banner */}
          <div className="w-full h-32 bg-[#2f3336]" />

          {/* Profile header */}
          <div className="px-4">
            {/* Avatar + Edit button */}
            <div className="flex justify-between items-end -mt-11 mb-3">
              <div className="w-[150px] h-[150px] rounded-full border-4 border-black overflow-hidden flex-shrink-0 bg-[#1a1a2e]">
                <img src="./pi/MAIN.jpeg" alt="avatar" className="w-full h-full object-cover" />
                {/* <div
                  className="w-full h-full flex items-center justify-center text-3xl font-extrabold text-white"
                  style={{
                    background: "linear-gradient(135deg, #5227FF, #FF9FFC)",
                  }}
                >
                  R
                </div> */}
              </div>

              {/* <button className="px-4 py-2 rounded-full border border-[#536471] bg-transparent text-white text-sm font-bold hover:bg-white/[0.06] transition-colors">
                Edit profile
              </button> */}
            </div>

            {/* Name + Verified badge */}
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-xl font-extrabold text-white">
                Rupesh Rauniyar
              </span>
              {/* <button className="flex items-center gap-1.5 border border-[#2f3336] rounded-full py-[3px] pr-2.5 pl-1.5 text-[13px] font-bold text-white hover:bg-white/[0.05] transition-colors">
                <div className="w-[18px] h-[18px] bg-[#1d9bf0] rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={12} color="white" strokeWidth={2.5} />
                </div>
                Get verified
              </button> */}
            </div>

            {/* Handle */}
            <div className="text-[15px] text-[#71767b] mb-2">
              A <b>Student</b> + <b>WEB DEV</b> + <b>Editor</b> at the age of 16
              .
            </div>

            {/* Joined date */}
            <div className="flex items-start   gap-1.5  text-[15px] mb-3">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* shine sweep */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={16}
                  height={16}
                  className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>

                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                  Github
                </span>

                <span className="text-zinc-500 group-hover:text-zinc-300 text-[13px] transition-colors duration-300">
                  ›
                </span>
              </a>
              <a
                href="https://www.instagram.com/rupeshrauniyar_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={16}
                  height={16}
                  className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>

                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                  Instagram
                </span>

                <span className="text-zinc-500 group-hover:text-zinc-300 text-[13px] transition-colors duration-300">
                  ›
                </span>
              </a>
            </div>

            {/* Following / Followers */}
            <div className="flex gap-5 mb-4 text-[15px]">
              <a
                href="#"
                className="text-[#71767b] no-underline hover:underline"
              >
                <strong className="text-white font-bold mr-0.5">1</strong>
                Following
              </a>
              <a
                href="#"
                className="text-[#71767b] no-underline hover:underline"
              >
                <strong className="text-white font-bold mr-0.5">0</strong>
                Followers
              </a>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#2f3336] overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-fit px-3 py-4 text-center text-[15px] whitespace-nowrap cursor-pointer border-b-2 transition-colors bg-transparent
         ${
           activeTab === tab
             ? "font-bold text-[#e7e9ea] border-[#1d9bf0]"
             : "font-medium text-[#71767b] border-transparent hover:bg-white/[0.03] hover:text-[#e7e9ea]"
         }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-3 gap-0.5 mt-0.5">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div
                  className="w-full h-full transition-opacity duration-200"
                  style={{
                    background: post.gradient,
                    opacity: hoveredPost === post.id ? 0.85 : 1,
                  }}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200
           ${hoveredPost === post.id ? "opacity-100 bg-black/35" : "opacity-0"}`}
                >
                  <span className="text-xs font-bold text-white">
                    ♥ {post.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
