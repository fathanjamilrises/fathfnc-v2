import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_h5s88pq",
        "template_5jzbttp",
        form.current,
        "rojZzNah4ojek8nN1"
      )
      .then(
        () => {
          setLoading(false);
          setFormData({ user_name: "", user_email: "", message: "" });
          e.target.reset();
        },
        () => {
          setLoading(false);
        }
      );
  };

  // cek apakah semua field sudah terisi
  const isFormValid =
    formData.user_name.trim() &&
    formData.user_email.trim() &&
    formData.message.trim();

  return (
    <footer className="bg-[#f9f5f2] border-t-3 border-black px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Info */}
        <div>
          <h3 className="text-2xl md:text-3xl font-black font-satoshi mb-4">
            Contact Me
          </h3>
          <p className="text-gray-700 font-inter mb-4">
            I'm currently open to new projects and collaborations. Whether you
            have a specific project in mind or just want to say hi, feel free to
            reach out!
          </p>

          <p className="text-sm font-semibold mb-1">Email me at</p>
          <a
            href="mailto:hi@fathan.dev"
            className="text-lg font-bold underline hover:text-purple-700 transition"
          >
            fathfnc@gmail.com
          </a>
        </div>

        {/* Right Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            value={formData.user_name}
            onChange={(e) =>
              setFormData({ ...formData, user_name: e.target.value })
            }
            className="border-2 border-black px-4 py-2 rounded-sm shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            value={formData.user_email}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
            className="border-2 border-black px-4 py-2 rounded-sm shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border-2 border-black px-4 py-2 rounded-sm shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition md:col-span-2"
            rows="4"
          />
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`flex justify-center items-center gap-2 bg-[#bafca2] text-black border-2 border-black px-6 py-3 font-bold rounded-sm shadow-[3px_3px_0px_#000] transition md:col-span-2 
              ${
                loading || !isFormValid
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              }`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Inquiry"
            )}
          </button>
        </form>
      </div>

      <hr className="mt-10 w-full" />

      <div className="flex flex-col md:flex-row justify-between gap-16 mt-10 container mx-auto">
        <div>
          <h1 className="text-xl md:text-3xl font-satoshi font-black">
            fathfnc
          </h1>
          <p className="font-satoshi text-based md:text-lg">
            Frontend Engineer & Web Developer
          </p>
        </div>

        <div>
          <h3 className="text-md md:text-lg font-inter font-medium">
            ©2025 fathfnc
          </h3>
          {/* Socials */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://www.instagram.com/fathh.911/" className="hover:text-purple-700 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/fathan-jamil-4b6606341/" className="hover:text-purple-700 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/fathanjamilrises" className="hover:text-purple-700 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
