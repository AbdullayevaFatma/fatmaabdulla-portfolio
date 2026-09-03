import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top">
          <span className="text-2xl font-bold tracking-tight">
            F<span className="text-blue-500">A</span>
          </span>
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail icon" className="w-6"/>
          johndoe@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Fatma Abdullayeva. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/AbdullayevaFatma">Github</a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/fatmaabdullayeva/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
