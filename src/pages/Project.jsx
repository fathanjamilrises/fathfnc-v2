import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useLanguage } from "../context/LanguageContext";

const Project = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Projects",
      subtitle: "See all my projects",
      viewNow: "View Now ↗",
      project1: {
        title: "Barcelona Landing Page Website",
        desc: "A landing page for Fc Barcelona Club, built with React, TailwindCSS, and Firebase.",
      },
      project2: {
        title: "FMDB Movie Database Platform",
        desc: "A movie database platform that provides comprehensive information about films, including details, reviews, and ratings, built with React and TailwindCSS.",
      },
      project3: {
        title: "XII PPLG Songfess & Menfess",
        desc: "A Songfess & Menfess project for XII PPLG SMKN 4 Tasikmalaya.",
      },
      project4: {
        title: "Portfolio Website v1",
        desc: "A first portfolio website built with Next.js, and TailwindCSS.",
      },
      project5: {
        title: "SMKN 4 Kota Tasikmalaya Website",
        desc: "A website for SMKN 4 Kota Tasikmalaya school built with HTML, CSS, and Bootstrap.",
      },
    },
    id: {
      title: "Proyek",
      subtitle: "Lihat semua proyek saya",
      viewNow: "Lihat Sekarang ↗",
      project1: {
        title: "Website Landing Page Barcelona",
        desc: "Sebuah landing page untuk klub Fc Barcelona, dibuat dengan React, TailwindCSS, dan Firebase.",
      },
      project2: {
        title: "Platform Database Film FMDB",
        desc: "Sebuah platform database film yang menyediakan informasi lengkap tentang film, termasuk detail, ulasan, dan rating, dibuat dengan React dan TailwindCSS.",
      },
      project3: {
        title: "XII PPLG Songfess & Menfess",
        desc: "Proyek Songfess & Menfess untuk XII PPLG SMKN 4 Tasikmalaya.",
      },
      project4: {
        title: "Website Portofolio v1",
        desc: "Website portofolio pertama yang dibuat dengan Next.js dan TailwindCSS.",
      },
      project5: {
        title: "Website SMKN 4 Kota Tasikmalaya",
        desc: "Website untuk sekolah SMKN 4 Kota Tasikmalaya yang dibuat dengan HTML, CSS, dan Bootstrap.",
      },
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2] font-satoshi">
      <Navbar />

      {/* Projects Section */}
      <section className="bg-purple-500 border-t-2 border-black">
        <div className="w-full mx-auto text-center py-10 md:py-14 border-b-3 border-black">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-center font-black text-[#bafca2] font-satoshi mt-2 
            drop-shadow-[2px_2px_0px_#000000] outline-text"
          >
            {t.title}
          </h2>
          <p className="mt-4 text-base md:text-lg font-semibold text-center">
            {t.subtitle}
          </p>
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
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-200 border border-black px-2 py-1 text-sm font-medium">
                React.js
              </span>
              <span className="bg-blue-400 border border-black px-2 py-1 text-sm font-medium">
                TailwindCSS
              </span>
              <span className="bg-yellow-200 border border-black px-2 py-1 text-sm font-medium">
                Firebase
              </span>
            </div>
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t.project1.title}
            </h3>
            <p className="text-gray-600 font-inter">{t.project1.desc}</p>
            <a
              href="https://barcelona-landing-page.vercel.app/"
              className="mt-6 bg-[#d9f99d] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t.viewNow}
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-4 md:order-3 bg-white">
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-200 border border-black px-2 py-1 text-sm font-medium">
                React.js
              </span>
              <span className="bg-blue-300 border border-black px-2 py-1 text-sm font-medium">
                TailwindCSS
              </span>
            </div>
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t.project2.title}
            </h3>
            <p className="text-gray-600 font-inter">{t.project2.desc}</p>
            <a
              href="https://fmdb-practice-fetch-movie-api.vercel.app/"
              className="mt-6 bg-[#fef9c3] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t.viewNow}
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
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-200 border border-black px-2 py-1 text-sm font-medium">
                React.js
              </span>
              <span className="bg-blue-300 border border-black px-2 py-1 text-sm font-medium">
                TailwindCSS
              </span>
              <span className="bg-green-200 border border-black px-2 py-1 text-sm font-medium">
                Supabase
              </span>
            </div>
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t.project3.title}
            </h3>
            <p className="text-gray-600 font-inter">{t.project3.desc}</p>
            <a
              href="https://pplg3songfessmenfess.netlify.app/"
              className="mt-6 bg-[#fbcfe8] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t.viewNow}
            </a>
          </div>

          {/* Project 4 */}
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-8 md:order-7 bg-white">
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-200 border border-black px-2 py-1 text-sm font-medium">
                Next.js
              </span>
              <span className="bg-blue-300 border border-black px-2 py-1 text-sm font-medium">
                TailwindCSS
              </span>
            </div>
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t.project4.title}
            </h3>
            <p className="text-gray-600 font-inter">{t.project4.desc}</p>
            <a
              href="https://fathfnc-portofolio.vercel.app/"
              className="mt-6 bg-[#bae6fd] border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t.viewNow}
            </a>
          </div>
          <div className="border-r-2 border-b-3 border-black order-7 md:order-8">
            <img
              src="../assets/image/project-4.png"
              alt="Project 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project 5 */}
          <div className="border-r-2 border-b-3 border-black order-10 md:order-9">
            <img
              src="../assets/image/project-5.png"
              alt="Project 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center border-r-2 border-b-3 border-black order-10 md:order-9 bg-white">
            <div className="flex gap-2 mb-4">
              <span className="bg-orange-200 border border-black px-2 py-1 text-sm font-medium">
                HTML
              </span>
              <span className="bg-blue-300 border border-black px-2 py-1 text-sm font-medium">
                CSS
              </span>
              <span className="bg-purple-200 border border-black px-2 py-1 text-sm font-medium">
                Bootstrap
              </span>
            </div>
            <h3 className="text-2xl font-bold font-satoshi mb-2">
              {t.project5.title}
            </h3>
            <p className="text-gray-600 font-inter">{t.project5.desc}</p>
            <a
              href="https://smkn4tasikmalaya.netlify.app/"
              className="mt-6 bg-green-200 border-2 border-black px-4 py-2 font-semibold 
              shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black]
              rounded-sm transition-all ease-in-out duration-300 w-fit"
            >
              {t.viewNow}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Project;
