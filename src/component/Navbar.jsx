import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: language === "en" ? "Home" : "Beranda", path: "/" },
    { name: language === "en" ? "About" : "Tentang", path: "/about" },
    {
      name: language === "en" ? "Certificate" : "Sertifikat",
      path: "/certificate",
    },
    { name: language === "en" ? "Project" : "Proyek", path: "/project" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-200 ${
          scrolled ? "bg-[#f9f5f2] border-b-2" : "bg-[#f9f5f2]"
        }`}
      >
        <h1 className="font-extrabold font-satoshi text-xl md:text-2xl">
          fathfnc
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-bold text-sm md:text-base font-satoshi">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className={`relative group ${
                      isActive ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full transform transition-transform duration-300 ease-out 
                        ${
                          isActive
                            ? "scale-x-100 bg-black"
                            : "scale-x-0 bg-black group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={toggleLanguage}
            className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black shadow-[4px_4px_0_#000] rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                language === "en"
                  ? "url('https://flagcdn.com/w40/gb.png')"
                  : "url('https://flagcdn.com/w40/id.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full bg-[#f9f5f2] z-50 p-8 flex flex-col justify-center items-center"
          >
            <button
              className="self-end absolute top-6 text-3xl mb-6"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            <ul className="flex flex-col gap-6 text-center text-lg font-bold text-gray-900">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`relative group ${
                        isActive ? "text-black" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full transform transition-transform duration-300 ease-out 
                          ${
                            isActive
                              ? "scale-x-100 bg-black"
                              : "scale-x-0 bg-black group-hover:scale-x-100"
                          }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
