import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                {/* Name */}
                <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                >
                  Umar Khan
                </motion.h1>

                {/* Role */}
                <motion.span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500  bg-clip-text  text-3xl lg:text-4xl tracking-tight text-transparent"
                >
                  Full Stack Developer
                </motion.span>

                {/* Type Animation */}
                <motion.div
                  variants={container(0.8)}
                  initial="hidden"
                  animate="visible"
                  className="py-3 text-2xl lg:text-3xl font-semibold text-center lg:text-left"
                >
                  <span className="text-slate-400">An expert in creating </span>
                  <br className="block lg:hidden" />
                  <TypeAnimation
                    sequence={[
                      "web applications.",
                      1000,
                      "mobile applications.",
                      1000,
                      "responsive websites.",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  />
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                  className="mb-4 max-w-xl py-3 font-light tracking-tighter text-center lg:text-left"
                >
                  {HERO_CONTENT}
                </motion.p>

                {/* Resume Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1Qbs7sGUWGqwDvOetlSgk1uzwAfAvYlnf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={container(1.2)}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40"
                >
                  View Resume
                </motion.a>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  src={profilePic}
                  alt="Umar Khan"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
