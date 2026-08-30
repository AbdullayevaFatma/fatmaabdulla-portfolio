import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>

      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 aspect-square flex items-center justify-center">
          <span className="text-[120px] sm:text-[160px] font-bold tracking-tighter">
            F<span className="text-blue-500">A</span>
          </span>
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo text-gray-700 leading-7">
            I&apos;m Fatma Abdullayeva, a Full-Stack Developer based in Turkey.
            I enjoy building modern, responsive, and user-friendly web
            applications, from creating intuitive interfaces with React and
            Next.js to developing reliable backend systems with Node.js.
            I&apos;m passionate about learning new technologies, solving
            problems, and turning ideas into clean and functional digital
            experiences.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />

                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>

                <p className="text-gray-600 text-sm leading-6">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-black duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
