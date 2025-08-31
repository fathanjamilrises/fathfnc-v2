import {
  FaFigma,
  FaDribbble,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FaJs } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const t = {
    en: {
      title: "About Me",
      desc: `As a passionate Front-End Developer, I specialize in crafting visually stunning and highly responsive web interfaces. With a keen eye for design and a strong foundation in modern web technologies, I transform ideas into interactive and seamless user experiences. My goal is to bridge the gap between aesthetics and functionality, ensuring that every website I build is not only beautiful but also intuitive and efficient.`,
      more: `Beyond coding, I constantly explore new design trends and frameworks to keep my skills sharp and relevant in today’s fast-paced tech industry. I believe that great design is not just about how it looks, but also about how it works—every detail, from typography to transitions, contributes to the overall experience.`,
      future: `In the future, I aspire to contribute to larger-scale projects that have real impact. For me, coding is more than just writing lines of code—it’s about creating meaningful digital experiences that connect with people and make their lives easier.`,
      languages: "Languages",
      education: "Education",
      student: "Student at",
      projects: "Projects",
      projectDesc:
        "Built more than 5 projects including websites, dashboards, and creative portfolios",
    },
    id: {
      title: "Tentang Saya",
      desc: `Sebagai seorang Front-End Developer yang penuh semangat, saya fokus membuat antarmuka web yang menarik dan responsif. Dengan ketelitian pada desain dan fondasi kuat di teknologi web modern, saya mengubah ide menjadi pengalaman pengguna yang interaktif. Tujuan saya adalah menjembatani estetika dan fungsionalitas, sehingga setiap website yang saya buat tidak hanya indah tetapi juga intuitif dan efisien.`,
      more: `Selain ngoding, saya terus mengeksplorasi tren desain dan framework baru agar tetap relevan di industri teknologi yang bergerak cepat. Saya percaya desain hebat bukan hanya soal tampilan, tapi juga bagaimana cara kerjanya—setiap detail, dari tipografi hingga transisi, berkontribusi pada pengalaman keseluruhan.`,
      future: `Di masa depan, saya ingin berkontribusi pada proyek berskala besar yang berdampak nyata. Bagi saya, coding bukan sekadar menulis baris kode—tetapi menciptakan pengalaman digital bermakna yang terhubung dengan orang dan mempermudah hidup mereka.`,
      languages: "Bahasa Pemrograman",
      education: "Pendidikan",
      student: "Siswa di",
      projects: "Proyek",
      projectDesc:
        "Membangun lebih dari 5 proyek termasuk website, dashboard, dan portofolio kreatif",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2] font-satoshi">
      <Navbar />

      <section className="max-w-full mx-auto grid lg:grid-cols-2 gap-0 items-center bg-white">
        {/* Left Side */}
        <div className="px-12 py-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 ">
            {t[language].title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t[language].desc}
            <br />
            <br />
            {t[language].more}
            <br />
            <br />
            {t[language].future}
          </p>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {t[language].languages}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] transition-all duration-300 hover:shadow-[4px_4px_0px_black]">
                  <FaHtml5 className="text-md text-orange-700" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] transition-all duration-300 hover:shadow-[4px_4px_0px_black]">
                  <FaCss3 className="text-md text-blue-700" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] transition-all duration-300 hover:shadow-[4px_4px_0px_black]">
                  <FaJs className="text-md text-yellow-700" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-purple-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] transition-all duration-300 hover:shadow-[4px_4px_0px_black]">
                  <FaPhp className="text-md text-purple-700" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] transition-all duration-300 hover:shadow-[4px_4px_0px_black]">
                  <FaPython className="text-md text-yellow-600" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {t[language].education}
              </h3>
              <p className="text-lg text-gray-700">
                {t[language].student}{" "}
                <a
                  className="font-bold hover:text-purple-300"
                  href="https://www.smkn4-tsm.sch.id/"
                >
                  SMKN 4 Tasikmalaya
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {t[language].projects}
              </h3>
              <p className="text-lg text-gray-700">{t[language].projectDesc}</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center bg-gradient-to-br from-purple-500 to-purple-700 w-full h-full py-16">
          <img
            src="../assets/image/hero.png"
            alt="Profile"
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover relative z-10"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
