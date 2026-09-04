import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {" "}
        Fatma <span className="text-blue-500">Abdullayeva</span>{" "}
      </h2>

      <h3 className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-4 font-Ovo">
        Hi! I&apos;m Fatma
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-Ovo leading-tight">
        Full-Stack Developer
        <br />
        building modern web experiences.
      </h1>

      <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-7">
        I&apos;m a Full-Stack Developer based in Turkey, passionate about
        building fast, scalable, and user-friendly web applications with modern
        technologies.
      </p>

      <p className="mt-4 text-sm md:text-base text-gray-500">
        Next.js · React · TypeScript · Node.js · MongoDB
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <a
          href="#contact"
          className="px-8 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white hover:bg-gray-800 transition dark:bg-transparent"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition bg-white dark:text-black"
        >
          my resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
