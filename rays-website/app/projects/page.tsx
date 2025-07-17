'use client'

import { motion } from "framer-motion";
import Recipe4MePreview from '@/public/recipe4me-preview.png';
import JankJepPreview from '@/public/jankjep-preview.png';
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex items-center justify-center bg-black w-full">
      <div className="w-full mx-10">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-7xl my-[100px]">
            My Projects
          </h1>
        </div>
        <div className="flex w-full justify-start mb-[50px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="z-[100] flex items-center w-[65rem] h-[43rem] bg-[linear-gradient(_to_bottom_right,rgba(255,255,255,0.33),rgba(86,196,149,0.33)_)]">
            <Image
              src={Recipe4MePreview}
              alt="Recipe4Me Page Preview"
              className="z-[100] w-[41rem] sm:w-[55rem]"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="relative text-white flex flex-col items-start justify-center right-[5rem]">
            <h2 className="text-5xl font-semibold mb-5">Recipe4Me</h2>
            <p className="text-xl max-w-md mb-5">
              Full stack recipe search engine built with React, TypeScript, Next.js API routes and MongoDB
            </p>
            <a target="_blank" rel="noopener noreferrer" href='https://recipe4me.vercel.app/' className="text-2xl mb-5">
              <h3>
                APPLICATION
              </h3>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rabreu2/recipe4me' className="text-2xl mb-5">
              <h3 className="text-2xl">
                CODEBASE
              </h3>
            </a>
          </motion.div>
        </div>

        <div className="flex w-full justify-end mb-[50px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="relative text-white text-right flex flex-col items-end justify-center left-[5rem]">
            <h2 className="text-5xl font-semibold mb-5">JankJep (WIP)</h2>
            <p className="text-xl max-w-md mb-5">
              Jeopardy! inspired game built with React, TypeScript, Next.js API routes and Cluebase API
            </p>
            <a target="_blank" rel="noopener noreferrer" href='https://www.jankjep.com/' className="text-2xl mb-5">
              <h3>
                APPLICATION
              </h3>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rabreu2/jank-jep' className="text-2xl mb-5">
              <h3 className="text-2xl">
                CODEBASE
              </h3>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="z-[100] flex items-center justify-end w-[65rem] h-[43rem] bg-[linear-gradient(_to_bottom_right,rgba(255,255,255,0.33),rgba(86,196,149,0.33)_)]">
            <Image
              src={JankJepPreview}
              alt="JankJep Page Preview"
              className="w-[41rem] sm:w-[55rem]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}