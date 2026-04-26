import React, { useEffect, useRef, useState } from "react";
import LiquidEther from "../components/LiquidEther";
import SplitText from "../components/SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link, useParams, useSearchParams } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

// ─── SOCIAL LINKS DATA ───────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    id: "github",
    label: "Github",
    href: "https://github.com/Rupeshrauniyar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={16}
        height={16}
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/rupeshrauniyar_",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={16}
        height={16}
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

// ─── ABOUT SECTIONS DATA ─────────────────────────────────────────────────────
const ABOUT_SECTIONS = [
  {
    id: "code",
    heading: "Coding",
    emoji: "💻",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    accentColor: "text-blue-400",
    items: [
      {
        label: "MongoDB",
        emoji: "🍃",
        color: "bg-green-900/40 border-green-700/40 text-green-300",
      },
      {
        label: "Express",
        emoji: "⚡",
        color: "bg-zinc-800/60 border-zinc-600/40 text-zinc-300",
      },
      {
        label: "Node.js",
        emoji: "🟢",
        color: "bg-green-900/40 border-green-700/40 text-green-300",
      },
      {
        label: "React",
        emoji: "⚛️",
        color: "bg-cyan-900/40 border-cyan-700/40 text-cyan-300",
      },
      {
        label: "Next.js",
        emoji: "▲",
        color: "bg-zinc-800/60 border-zinc-600/40 text-zinc-300",
      },
    ],
  },
  {
    id: "editing",
    heading: "Editing",
    emoji: "🎬",
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
    accentColor: "text-purple-400",
    items: [
      {
        label: "After Effects",
        emoji: "🌀",
        color: "bg-purple-900/40 border-purple-700/40 text-purple-300",
      },
      {
        label: "Premiere Pro",
        emoji: "🎞️",
        color: "bg-violet-900/40 border-violet-700/40 text-violet-300",
      },
      {
        label: "CapCut",
        emoji: "✂️",
        color: "bg-pink-900/40 border-pink-700/40 text-pink-300",
      },
    ],
  },
  {
    id: "student",
    heading: "Student",
    emoji: "📚",
    color: "from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
    accentColor: "text-yellow-400",
    items: [
      {
        label: "Maths",
        emoji: "🔢",
        color: "bg-yellow-900/40 border-yellow-700/40 text-yellow-300",
      },
      {
        label: "Physics",
        emoji: "⚛️",
        color: "bg-orange-900/40 border-orange-700/40 text-orange-300",
      },
      {
        label: "Chemistry",
        emoji: "🧪",
        color: "bg-lime-900/40 border-lime-700/40 text-lime-300",
      },
      {
        label: "Computer",
        emoji: "🖥️",
        color: "bg-sky-900/40 border-sky-700/40 text-sky-300",
      },
    ],
  },
  {
    id: "personal",
    heading: "Personal",
    emoji: "🎯",
    color: "from-rose-500/10 to-red-500/10 border-rose-500/20",
    accentColor: "text-rose-400",
    items: [
      {
        label: "Movies",
        emoji: "🎥",
        color: "bg-red-900/40 border-red-700/40 text-red-300",
      },
      {
        label: "Family",
        emoji: "❤️",
        color: "bg-rose-900/40 border-rose-700/40 text-rose-300",
      },
    ],
  },
];

// ─── POSTS DATA ───────────────────────────────────────────────────────────────
const posts = [
  {
    id: 1,
    title: "Songify",
    description: "Description for post 3",
    link: "https://songifylisten.vercel.app",
    image: "./appImages/songify.png",
  },
  {
    id: 1,
    title: "Propatyc",
    description: "Description for post 3",
    link: "https://propatyc.vercel.app/intro",
    image: "https://propatyc.vercel.app/web-app-manifest-512x512.png",
  },
  {
    id: 1,
    title: "FreeFlixrr",
    description: "Description for post 3",
    link: "https://freeflixrr.vercel.app",
    image: "./appImages/freeflixrr.svg",
  },
  {
    id: 1,
    title: "Mistri",
    description: "Description for post 2",
    link: "https://mistri-user.vercel.app/",
    image: "./appImages/mistri.jpg",
  },
  {
    id: 1,
    title: "Messgram",
    description: "Description for post 1",
    link: "https://messgram.vercel.app",
    image: "./appImages/messgram.png",
  },
  {
    id: 2,
    title: "Nepal Cargo Train Edit",
    description: "Description for post 1",
    link: "https://drive.google.com/file/d/1iVs4EJ2HTBc4R5BKEaYLyAGiee4FdFjd/view?usp=drive_link",
    image: "./pi/cargo.png",
  },
  {
    id: 2,
    title: "Hydroponic Farm",
    description: "Description for post 1",
    link: "https://drive.google.com/file/d/1hsC64_oyZt9DVVMLFUxC8TizCTSFzklk/view?usp=drive_link",
    image: "./pi/hpfarm.png",
  },
  {
    id: 2,
    title: "A Highlight video of Chhaya Center ",
    description: "Description for post 1",
    link: "https://drive.google.com/file/d/1PZu-84uGbwjxI_BnABrY3E7j7QLYGOrs/view?usp=drive_link",
    image: "./pi/chhayaCenter.png",
  },
  {
    id: 2,
    title: "New Year 2083 festie celebration",
    description: "Description for post 1",
    link: "https://drive.google.com/file/d/1PZu-84uGbwjxI_BnABrY3E7j7QLYGOrs/view?usp=drive_link",
    image: "./pi/chhayaNY.png",
  },
  {
    id: 3,
    title: "Received a certificate for good grade in SEE 2082",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std1.jpeg",
  },
  {
    id: 3,
    title: "A casual pic of a function",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std2.jpeg",
  },
  {
    id: 3,
    title: "Went for a trip from school",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std4.jpeg",
  },
  {
    id: 3,
    title: "The glasses suited well enough",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std3.jpeg",
  },
  {
    id: 3,
    title: "A casual day of college",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std6.jpeg",
  },
  {
    id: 3,
    title: "Scored 3.76 GPA in Grade 10 2082",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/std5.jpeg",
  },
  {
    id: 4,
    title: "A Casual Good Looking Day",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/personal_index.jpeg",
  },

  {
    id: 4,
    title: "Close shot of eyes",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/personal1.jpeg",
  },
  {
    id: 4,
    title: "The cloudy biratnagar",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/personal2.jpeg",
  },
  {
    id: 4,
    title: "A pic from a cool trip",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/MAIN.jpeg",
  },
  {
    id: 4,
    title: "Got ready for Birat Expo 2082",
    description: "Description for post 1",
    // link: "https://messgram.vercel.app",
    image: "./pi/personal_index2.jpeg",
  },
];

const TABS = ["Coding", "Editing", "Student", "Personal"];

// ─── SHINE BUTTON (reusable) ──────────────────────────────────────────────────
const ShineLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
  >
    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
    <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">
      {icon}
    </span>
    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
    <span className="text-zinc-500 group-hover:text-zinc-300 text-[13px] transition-colors duration-300">
      ›
    </span>
  </a>
);

// ─── FLOATING CHIP ────────────────────────────────────────────────────────────
const Chip = ({ emoji, label, color }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium transition-all duration-200 hover:scale-105 hover:brightness-125 cursor-default select-none ${color}`}
    style={{ animationDelay: `${Math.random() * 2}s` }}
  >
    <span>{emoji}</span>
    {label}
  </span>
);

// ─── ABOUT CARD ───────────────────────────────────────────────────────────────
const AboutCard = ({ heading, emoji, color, accentColor, items }) => (
  <div className={`rounded-xl border bg-gradient-to-br p-3 ${color}`}>
    <div
      className={`text-xs font-bold uppercase tracking-widest mb-2 ${accentColor}`}
    >
      {emoji} {heading}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Chip key={item.label} {...item} />
      ))}
    </div>
  </div>
);

// ─── HOME ─────────────────────────────────────────────────────────────────────
const Home = () => {
  // const fetchData = async () => {
  //   const res = await fetch(
  //     "https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=subh bounce",
  //   );
  //   const data = await res.json(res);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const [searchParams, setSearchParams] = useState(null);
  const [params] = useSearchParams();
  const [activeTab, setActiveTab] = useState("Coding");
  useEffect(() => {
    const t = params.get("t");
    if (t) {
      // setSearchParams(t);
      setActiveTab(t);
    } else {
      setActiveTab("Coding");
    }
  }, [params]);

  const [hoveredPost, setHoveredPost] = useState(null);
  const textRef = useRef(null);
  const postRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: -1000,
        filter: "blur(10px)",
        duration: 2,
        delay: 1.5,
        ease: "power2.inOut",
      },
    );
    gsap.fromTo(
      postRef.current,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        delay: 2.5,
        ease: "power2.inOut",
      },
    );
  }, []);

  return (
    <div className="w-full h-full">
      {/* Intro overlay */}
      {/* {console.log(activeTab)} */}
      <div
        className="fixed z-20 text-white w-full backdrop-blur-3xl flex items-center justify-center h-[100vh]"
        ref={textRef}
      >
        <SplitText
          className="xl:text-[100px] text-[90px] font-bold"
          text={"RUPESH"}
        />
      </div>

      <div className="w-full" ref={postRef}>
        <div className="bg-black text-white min-h-screen max-w-[600px] mx-auto border-x border-[#2f3336] font-sans">
          {/* Banner */}
          <div className="w-full h-32 bg-[#2f3336]" />

          {/* Profile header */}
          <div className="px-4">
            {/* Avatar */}
            <div className="flex justify-between items-end -mt-11 mb-3">
              <div className="w-[150px] h-[150px] rounded-full border-4 border-black overflow-hidden flex-shrink-0 bg-[#1a1a2e]">
                <img
                  src="./pi/MAIN.jpeg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-xl font-extrabold text-white">
                Rupesh Rauniyar
              </span>
            </div>

            {/* Bio */}
            <div className="text-[15px] text-[#71767b] mb-3">
              A <b className="text-white">Student</b> +{" "}
              <b className="text-white">Web Dev</b> +{" "}
              <b className="text-white">Editor</b> at the age of 16.
            </div>

            {/* ── SOCIAL LINKS (mapped) ── */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              {SOCIAL_LINKS.map((link) => (
                <ShineLink
                  key={link.id}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>

            {/* ── ABOUT SECTIONS (mapped) ── */}
            {/* <div className="flex flex-col gap-2.5 mb-4">
              {ABOUT_SECTIONS.map((section) => (
                <AboutCard key={section.id} {...section} />
              ))}
            </div> */}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#2f3336] overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <Link
                to={`?t=${tab}`}
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
              </Link>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-3 gap-0.5 mt-0.5">
            {posts
              .filter((post) =>
                activeTab === "Coding"
                  ? post.id === 1
                  : activeTab === "Editing"
                    ? post.id === 2
                    : activeTab === "Student"
                      ? post.id === 3
                      : post.id === 4,
              )
              .map((post, i) => (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="relative aspect-square overflow-hidden cursor-pointer bg-white  text-white"
                  onMouseEnter={() => setHoveredPost(i)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div
                    className="absolute w-full h-full transition-opacity duration-200  text-white text-xl"
                    style={{
                      background: "",
                      opacity: hoveredPost === i ? 0.85 : 1,
                    }}
                  />
                  <img
                    src={post.image}
                    className="w-full h-full object-cover "
                    alt={"App Logo"}
                  />
                  {post.title}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
