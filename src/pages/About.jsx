import { FaFigma, FaDribbble, FaHtml5, FaCss3, FaPhp, FaPython } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaJs } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2] font-satoshi">
      <Navbar />

      <section className="max-w-full mx-auto grid lg:grid-cols-2 gap-0 items-center bg-white">
        {/* Left Side */}
        <div className="px-12 py-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 ">About Me</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            As a passionate Front-End Developer, I specialize in crafting
            visually stunning and highly responsive web interfaces. With a keen
            eye for design and a strong foundation in modern web technologies, I
            transform ideas into interactive and seamless user experiences. My
            goal is to bridge the gap between aesthetics and functionality,
            ensuring that every website I build is not only beautiful but also
            intuitive and efficient. <br />
            <br />
            Beyond coding, I constantly explore new design trends and frameworks
            to keep my skills sharp and relevant in today’s fast-paced tech
            industry. I believe that great design is not just about how it
            looks, but also about how it works—every detail, from typography to
            transitions, contributes to the overall experience. I’m also a big
            believer in collaboration, because the best products are created
            when ideas are shared and improved together. <br />
            <br />
            In the future, I aspire to contribute to larger-scale projects that
            have real impact, whether it’s through developing modern
            applications, building efficient systems, or designing user-friendly
            tools that solve everyday problems. For me, coding is more than just
            writing lines of code—it’s about creating meaningful digital
            experiences that connect with people and make their lives easier.
          </p>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <div
                  className="w-10 h-10 flex items-center justify-center bg-orange-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 
                                  transition-all duration-300 hover:shadow-[4px_4px_0px_black]"
                >
                  <FaHtml5 className="text-md text-orange-700" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-blue-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 
                                  transition-all duration-300 hover:shadow-[4px_4px_0px_black]"
                >
                  <FaCss3 className="text-md text-blue-700" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-yellow-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 
                                  transition-all duration-300 hover:shadow-[4px_4px_0px_black]"
                >
                  <FaJs className="text-md text-yellow-700" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-purple-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 
                                  transition-all duration-300 hover:shadow-[4px_4px_0px_black]"
                >
                  <FaPhp className="text-md text-purple-700" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-yellow-200 border-2 border-black rounded-lg shadow-[1px_1px_0px_black] mb-6 
                                  transition-all duration-300 hover:shadow-[4px_4px_0px_black]"
                >
                  <FaPython className="text-md text-yellow-600" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Education
              </h3>
              <p className="text-lg text-gray-700">
                Student at <a className="font-bold hover:text-purple-300" href="https://www.smkn4-tsm.sch.id/">SMKN 4 Tasikmalaya </a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Projects</h3>
              <p className="text-lg text-gray-700">
                Built more than 5 projects including websites, dashboards, and
                creative portfolios
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center bg-gradient-to-br from-purple-500 to-purple-700 w-full h-full py-16">
          {/* Profile Image */}
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
