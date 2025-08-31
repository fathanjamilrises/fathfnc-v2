import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useLanguage } from "../context/LanguageContext"; // <-- pakai context

const Certificate = () => {
  const { language } = useLanguage(); // ambil state bahasa

  // Data dengan dua bahasa
  const certifications = [
    {
      title: {
        en: "Basic Web Programming",
        id: "Pemrograman Web Dasar",
      },
      desc: {
        en: "Covers fundamental web development concepts, including HTML, CSS, and JavaScript.",
        id: "Membahas konsep dasar pengembangan web, termasuk HTML, CSS, dan JavaScript.",
      },
      img: "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebcerificate.9bb89fd4.png&w=750&q=75",
      company:
        "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdicoding.e5acb449.jpeg&w=32&q=75",
    },
    {
      title: {
        en: "Introduction to Programming Logic",
        id: "Pengenalan Logika Pemrograman",
      },
      desc: {
        en: "Explores basic programming logic and problem-solving techniques using pseudocode and flowcharts.",
        id: "Mempelajari logika pemrograman dasar dan teknik pemecahan masalah menggunakan pseudocode dan flowchart.",
      },
      img: "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogiccertificate.504913d0.png&w=750&q=75",
      company:
        "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdicoding.e5acb449.jpeg&w=32&q=75",
    },
    {
      title: {
        en: "Fundamentals of Software Development",
        id: "Fundamental Pengembangan Perangkat Lunak",
      },
      desc: {
        en: "Introduces the principles of software development, covering algorithms, data structures, and best coding practices.",
        id: "Mengenalkan prinsip pengembangan perangkat lunak, meliputi algoritma, struktur data, dan praktik terbaik pemrograman.",
      },
      img: "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoftwarecertificate.1c01aef9.png&w=1080&q=75",
      company:
        "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdicoding.e5acb449.jpeg&w=32&q=75",
    },
    {
      title: {
        en: "Basic JavaScript Learning",
        id: "Belajar JavaScript Dasar",
      },
      desc: {
        en: "Provides an in-depth introduction to JavaScript, covering syntax, DOM manipulation, and basic asynchronous programming.",
        id: "Memberikan pengenalan mendalam tentang JavaScript, meliputi sintaks, manipulasi DOM, dan pemrograman asinkron dasar.",
      },
      img: "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascripcertificate.bcb2380e.png&w=1080&q=75",
      company:
        "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdicoding.e5acb449.jpeg&w=32&q=75",
    },
    {
      title: {
        en: "Fundamental Frontend Web Development",
        id: "Fundamental Pengembangan Web Frontend",
      },
      desc: {
        en: "Focuses on frontend web development using modern tools and frameworks, including responsive design techniques.",
        id: "Berfokus pada pengembangan web frontend menggunakan tools dan framework modern, termasuk teknik desain responsif.",
      },
      img: "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrontendcertificate.92027bfc.png&w=750&q=75",
      company:
        "https://fathfnc-portofolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdicoding.e5acb449.jpeg&w=32&q=75",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2] font-satoshi">
      <Navbar />

      {/* Certification Section */}
      <section className="flex-1 py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          🎓 {language === "en" ? "My Certifications" : "Sertifikasi Saya"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black rounded-2xl px-6 py-4 shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_0px] hover:translate-x-2 hover:translate-y-2 transition-transform duration-200"
            >
              <img
                src={cert.img}
                alt={cert.title[language]}
                className="w-full object-cover rounded-xl border-2 border-black mb-4"
              />
              <h3 className="text-xl font-bold">{cert.title[language]}</h3>
              <p className="text-gray-700 mt-2">{cert.desc[language]}</p>
              <img className="w-8 mt-5" src={cert.company} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificate;
