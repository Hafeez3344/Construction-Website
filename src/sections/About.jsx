import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible" // Corrected typo here
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          WELCOME TO
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          Prime Construction
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Prime Construction: Building excellence with integrity, delivering
          top-tier construction services to turn your dream projects into
          reality.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center item-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          At Prime Construction, we build with precision and dedication, turning
          your dreams into solid structures. From foundation to finishing
          touches, we tackle challenges with expertise and innovation, ensuring
          every project meets the highest standards of quality and
          craftsmanship. Our team is committed to delivering exceptional
          results, addressing every detail, and overcoming obstacles with
          solutions that prioritize your vision. Whether it's residential,
          commercial, or industrial construction, we stand by our promise of
          excellence, safety, and timely execution. Trust us to build the future
          you envision, with integrity and professionalism at every step.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;

































