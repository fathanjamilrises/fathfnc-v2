import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // tambahin useLocation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ambil path aktif

  // Deteksi scroll untuk desktop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Certificate", path: "/certificate" },
    { name: "Project", path: "/project" },
  ];

  return (
    <>
      {/* Navbar Desktop */}
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-100 ${
          scrolled ? "bg-[#f9f5f2] border-b-2" : "bg-[#f9f5f2]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <h1 className="font-extrabold font-satoshi text-xl md:text-2xl">
            fathfnc
          </h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-bold text-sm md:text-base font-satoshi">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={idx}
                className={`relative group cursor-pointer ${
                  isActive ? "text-black" : "text-gray-900"
                }`}
              >
                <Link to={item.path} className="relative">
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-full bg-[#f9f5f2] z-50 p-8 flex flex-col justify-center items-center"
          >
            {/* Tombol close di dalam sidebar */}
            <button
              className="self-end text-3xl mb-6"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            {/* Menu Sidebar */}
            <ul className="flex flex-col gap-6 text-center text-lg font-bold text-gray-900">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
            relative inline-block transition duration-300
            ${isActive ? "text-black" : "text-gray-800 hover:text-black"}
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black 
            after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
          `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6 mt-auto text-2xl text-gray-800">
              <a
                href="https://www.instagram.com/fathh.911/"
                className="hover:text-purple-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/fathan-jamil-4b6606341/"
                className="hover:text-purple-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/fathanjamilrises"
                className="hover:text-purple-700 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
