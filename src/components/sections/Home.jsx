import skin from "../../assets/img/25470495-288f-4824-9cf9-e69f0499dc38-removebg-preview.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative"
    >
      <RevealOnScroll>
        {/* introduction  */}
        <div className="text-center z-10 px-6 order-1 md:order-none md:h-[480px] flex flex-col justify-center mt-24">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Daniel
          </h1>
          <p className="text-gray-100 text-base md:text-lg mb-8 max-w-lg mx-auto leading-snug">
            I'm a full-stack developer with a passion for creating beautiful and
            user-friendly interfaces. I've worked on various projects, from
            small side projects to large-scale applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-2/3 md:w-auto mx-auto">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {" "}
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              {" "}
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        {/* introduction  */}
        {/* Skin */}
        <div className="h-80 md:h-[480px] overflow-hidden order-2 md:order-none flex items-center justify-center mt-12 md:mt-24">
          <img
            src={skin}
            alt="Daniel's skin"
            className="w-full h-auto max-h-full object-contain custom-mask "
          ></img>
        </div>
        {/* Skin */}
      </RevealOnScroll>
    </section>
  );
};
