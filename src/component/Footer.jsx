import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  // 🔥 Text translate
  const t = {
    en: {
      contact_title: "Contact Me",
      contact_desc:
        "I'm currently open to new projects and collaborations. Whether you have a specific project in mind or just want to say hi, feel free to reach out!",
      contact_email: "Email me at",
      placeholder_name: "Your name",
      placeholder_email: "Your email",
      placeholder_message: "Tell me about your project",
      sending: "Sending...",
      send_button: "Send Inquiry",
      footer_role: "Frontend Engineer & Web Developer",
    },
    id: {
      contact_title: "Hubungi Saya",
      contact_desc:
        "Saya terbuka untuk proyek baru dan kolaborasi. Punya ide atau sekadar mau ngobrol? Langsung aja hubungi saya ✨",
      contact_email: "Email saya di",
      placeholder_name: "Nama kamu",
      placeholder_email: "Email kamu",
      placeholder_message: "Ceritain tentang proyek kamu",
      sending: "Lagi ngirim...",
      send_button: "Kirim Pesan",
      footer_role: "Frontend Engineer & Web Developer",
    },
  };

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

  const isFormValid =
    formData.user_name.trim() &&
    formData.user_email.trim() &&
    formData.message.trim();

  return (
    <footer className="bg-[#f9f5f2] border-t-3 border-black px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Info */}
        <div id="contact-info" className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black font-satoshi mb-4">
            {t[language].contact_title}
          </h3>
          <p className="text-gray-700 font-inter mb-4">
            {t[language].contact_desc}
          </p>

          <p className="text-sm font-semibold mb-1">
            {t[language].contact_email}
          </p>
          <a
            href="mailto:fathfnc@gmail.com"
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
            placeholder={t[language].placeholder_name}
            value={formData.user_name}
            onChange={(e) =>
              setFormData({ ...formData, user_name: e.target.value })
            }
            className="border-2 border-black px-4 py-2 rounded-sm shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder={t[language].placeholder_email}
            value={formData.user_email}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
            className="border-2 border-black px-4 py-2 rounded-sm shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition"
          />
          <textarea
            name="message"
            placeholder={t[language].placeholder_message}
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
                {t[language].sending}
              </>
            ) : (
              t[language].send_button
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
            {t[language].footer_role}
          </p>
        </div>

        <div>
          <h3 className="text-md md:text-lg font-inter font-medium">
            ©2025 fathfnc
          </h3>
          {/* Socials */}
          <div className="flex gap-4 mt-6 text-2xl">
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
        </div>
      </div>
    </footer>
  );
}
