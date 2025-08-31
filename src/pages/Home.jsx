import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { FaGlobe, FaPencilRuler } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  // 🔥 Text translate
  const t = {
    en: {
      intro: "Hi, My Name Is Fathan Jamil.",
      typingPrefix: "Hello I'm A",
      desc: "Hello I'm Fathan Jamil, a Frontend Developer who specializes in crafting visually stunning and highly responsive web interfaces.",
      aboutBtn: "About Me",
      contactBtn: "Contact Me",
      expertise: "My Expertise",
      services: "Services I Provide",
      service1: {
        title: "Web UI/UX Design",
        desc: "Crafting modern, user-friendly, and visually appealing web interfaces with a focus on usability, accessibility, and interactive experiences.",
      },
      service2: {
        title: "Fullstack Web",
        desc: "Building complete web applications from front to back — handling everything from databases and APIs to frontend interactions.",
      },
      service3: {
        title: "Frontend Web",
        desc: "Developing fast, responsive, and modern user interfaces using React, Next.js, and Tailwind CSS for seamless user experiences.",
      },
      portfolio: "Portfolio",
      projects: "My Latest Projects",
      project1: {
        title: "Barcelona Landing Page Website",
        desc: "A landing page for Fc Barcelona Club, built with React, TailwindCSS, and Firebase.",
        view: "View Now ↗",
      },
      project2: {
        title: "FMDB Movie Database Platform",
        desc: "A movie database platform that provides comprehensive information about films, including details, reviews, and ratings, built with React and TailwindCSS.",
        view: "View Now ↗",
      },
      project3: {
        title: "XII PPLG Songfess & Menfess",
        desc: "A Songfess & Menfess project for XII PPLG SMKN 4 Tasikmalaya.",
        view: "View Now ↗",
      },
      allProjects: "View All Projects",
    },
    id: {
      intro: "Halo! Nama saya Fathan Jamil 👋",
      typingPrefix: "Saya seorang",
      desc: "Saya Frontend Developer yang suka bikin website modern, gampang digunakan, dan pastinya menarik dilihat.",
      aboutBtn: "Kenalan Yuk",
      contactBtn: "Ngobrol Bareng",
      expertise: "Skill & Keahlian",
      services: "Apa yang Bisa Saya Bantu",
      service1: {
        title: "Desain UI/UX Web",
        desc: "Membuat tampilan web yang simpel, nyaman, dan enak dipakai siapa aja, dari anak muda sampai orang tua.",
      },
      service2: {
        title: "Fullstack Web",
        desc: "Mulai dari database, API, sampai tampilan web yang kece, semua bisa saya kerjakan dari awal sampai selesai.",
      },
      service3: {
        title: "Frontend Web",
        desc: "Fokus membuat web yang cepat, responsif, dan modern menggunakan React, Next.js, dan Tailwind CSS 🚀",
      },
      portfolio: "Portofolio",
      projects: "Proyek Terbaru",
      project1: {
        title: "Landing Page Barcelona",
        desc: "Landing page untuk FC Barcelona, dibuat dengan React, TailwindCSS, dan Firebase ⚽🔥",
        view: "Lihat Sekarang ↗",
      },
      project2: {
        title: "FMDB – Database Film",
        desc: "Platform film biar gampang cari info: detail, review, sampai rating. Dibangun dengan React + TailwindCSS.",
        view: "Lihat Sekarang ↗",
      },
      project3: {
        title: "Songfess & Menfess XII PPLG",
        desc: "Tempat curhat dan berbagi lagu untuk siswa XII PPLG SMKN 4 Tasikmalaya 🎶",
        view: "Lihat Sekarang ↗",
      },
      allProjects: "Lihat Semua Proyek",
    },
  };

  const words =
    language === "en"
      ? ["Frontend Developer", "Designer", "Coder", "UI/UX Enthusiast"]
      : ["Frontend Developer", "Desainer", "Programmer", "UI/UX Enthusiast"];

  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 120
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2] font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 py-12 xl:py-16 gap-12 justify-items-center items-center border-b-3 border-black">
        {/* Left Text */}
        <div>
          <p className="text-sm md:text-lg font-satoshi">{t[language].intro}</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mt-4">
            {t[language].typingPrefix} <br />
            <span className="inline-flex items-center text-purple-700 border-r-2 pr-1">
              {words[wordIndex].substring(0, subIndex)}
              <motion.span
                className="ml-1 w-[2px]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </span>
          </h2>

          <p className="text-sm md:text-base mt-6 max-w-lg">
            {t[language].desc}
          </p>

          <div className="flex gap-4">
            <Link
              to={"/about"}
              className="mt-8 bg-[#bafca2] border-2 border-black px-6 py-3 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-md transition-all transform ease-in-out duration-300"
            >
              {t[language].aboutBtn}
            </Link>
            <a
              href="#contact-info"
              className="mt-8 bg-white border-2 border-black px-6 py-3 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-md transition-all transform ease-in-out duration-300"
            >
              {t[language].contactBtn}
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <div className="p-4 md:p-6 relative">
            <img
              src="../assets/image/hero.png"
              alt="Hero"
              className="w-full md:w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="bg-white">
          <div className="w-full container px-4 xl:px-0 mx-auto text-start py-6 md:py-8">
            <p className="text-gray-700 font-medium font-inter">
              {t[language].expertise}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-inter mt-2">
              {t[language].services}
            </h2>
          </div>
        </div>
        <div className="w-full border-y-3 border-black">
          <div className="w-full container px-4 lg:px-0 mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 w-full border-x-1 border-black">
              {/* Card 1 */}
              <div className="group p-6 xl:p-8 text-start transition-all duration-300 hover:bg-white/50 border-b-3 border-x-2 md:border-b-0 md:border-r-3 md:border-l-2 border-black">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 transition-all duration-300 group-hover:shadow-[4px_4px_0px_black]">
                  <FaGlobe className="text-3xl text-purple-700" />
                </div>
                <h3 className="font-semibold text-xl mb-2 font-satoshi">
                  {t[language].service1.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {t[language].service1.desc}
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-6 xl:p-8 text-start transition-all duration-300 hover:bg-white/50 border-b-3 border-x-2 md:border-b-0 xl:border-x-0 border-black">
                <div className="w-16 h-16 flex items-center justify-center bg-green-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 transition-all duration-300 group-hover:shadow-[4px_4px_0px_black]">
                  <AiFillThunderbolt className="text-3xl text-green-700" />
                </div>
                <h3 className="font-semibold text-xl mb-2 font-satoshi">
                  {t[language].service2.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {t[language].service2.desc}
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-6 xl:p-8 text-start transition-all duration-300 hover:bg-white/50 border-x-2 xl:border-l-3 xl:border-r-2 border-black">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 transition-all duration-300 group-hover:shadow-[4px_4px_0px_black]">
                  <FaPencilRuler className="text-3xl text-blue-700" />
                </div>
                <h3 className="font-semibold text-xl mb-2 font-satoshi">
                  {t[language].service3.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {t[language].service3.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-purple-500 border-t-2 border-black">
        <div className="w-full mx-auto text-center py-10 md:py-14 bg-[#bafca2] border-b-3 border-black">
          <p className="text-gray-700 font-medium font-inter">
            {t[language].portfolio}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-inter mt-2">
            {t[language].projects}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 border-t-2 border-l-2 border-black font-satoshi">
          {/* Project 1 */}
          <div className="border-r-2 border-b-3 border-black order-1">
            <img
              src="../assets/image/project-1.png"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-2 bg-white">
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t[language].project1.title}
            </h3>
            <p className="text-gray-600 font-inter">
              {t[language].project1.desc}
            </p>
            <a
              href="https://barcelona-landing-page.vercel.app/"
              className="mt-6 bg-[#d9f99d] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t[language].project1.view}
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-4 md:order-3 bg-white">
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t[language].project2.title}
            </h3>
            <p className="text-gray-600 font-inter">
              {t[language].project2.desc}
            </p>
            <a
              href="https://fmdb-practice-fetch-movie-api.vercel.app/"
              className="mt-6 bg-[#fef9c3] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t[language].project2.view}
            </a>
          </div>
          <div className="border-r-2 border-b-3 border-black order-3 md:order-4">
            <img
              src="../assets/image/project-2.png"
              alt="Project 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project 3 */}
          <div className="border-r-2 border-b-3 border-black order-5 md:order-5">
            <img
              src="../assets/image/project-3.png"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-6 md:order-6 bg-white">
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t[language].project3.title}
            </h3>
            <p className="text-gray-600 font-inter">
              {t[language].project3.desc}
            </p>
            <a
              href="https://pplg3songfessmenfess.netlify.app/"
              className="mt-6 bg-[#fbcfe8] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t[language].project3.view}
            </a>
          </div>
        </div>
        <div className="mt-20 mb-20 flex justify-center items-center w-full">
          <Link
            to={"/project"}
            className="mt-8 bg-[#bafca2] border-2 border-black px-6 py-3 font-semibold w-fit
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-md transition-all transform ease-in-out duration-300"
          >
            {t[language].allProjects}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
