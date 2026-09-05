import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 aspect-square flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[120px] sm:text-[160px] font-bold tracking-tighter">
            F<span className="text-blue-500">A</span>
          </span>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-ovo text-gray-700 leading-7 dark:text-white/80">
            I&apos;m Fatma Abdullayeva, a Full-Stack Developer based in Turkey.
            I enjoy building modern, responsive, and user-friendly web
            applications, from creating intuitive interfaces with React and
            Next.js to developing reliable backend systems with Node.js.
            I&apos;m passionate about learning new technologies, solving
            problems, and turning ideas into clean and functional digital
            experiences.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm  dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4  className="my-6 text-gray-700 font-ovo dark:text-white/80"
           initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}>
            Tools I use
          </motion.h4>

          <motion.ul className="flex items-center gap-3 sm:gap-5"
           initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}>
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale:1.1}}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-black duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
