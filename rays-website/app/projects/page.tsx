'use client'

import { motion } from "framer-motion";
import Recipe4MePreview from '@/public/recipe4me-preview.png';
import JankJepPreview from '@/public/jankjep-preview.png';
import Image from "next/image";

export default function Projects() {
  return (
    <div className="transition-all duration-300 ease-in-out flex items-center justify-center bg-black w-full">
      <div className="w-full px-5 lg:px-10 pt-10 sm:pt-0">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl xl:text-7xl mb-[100px] sm:mb-[120px] md:my-[80px] lg:my-[135px] 2xl:my-[150px]">
            My Projects
          </h1>
        </div>
        <div className="flex w-full justify-start mb-[65px] sm:mb-[120px] md:mb-[75px] lg:mb-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="z-[100] flex items-center min-w-[17rem] min-h-[13rem] sm:min-w-[25rem] sm:min-h-[17rem] md:min-w-[33rem] md:min-h-[22rem] lg:min-w-[48rem] lg:min-h-[30rem] xl:min-w-[55rem] xl:min-h-[36rem] 2xl:min-w-[65rem] 2xl:min-h-[43rem] bg-[linear-gradient(_to_bottom_right,rgba(255,255,255,0.33),rgba(86,196,149,0.33)_)]">
            <Image
              src={Recipe4MePreview}
              alt="Recipe4Me Page Preview"
              className="z-[100] w-[13rem] sm:w-[20rem] md:w-[26rem] lg:w-[40rem] xl:w-[47rem] 2xl:w-[55rem]"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="relative text-white flex flex-col items-start justify-center right-[2.5rem] md:right-[5rem]">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-2 md:mb-5">Recipe4Me</h2>
            <p className="text-xs sm:text-sm md:text-base xl:text-xl max-w-md mb-2 md:mb-5">
              Full stack recipe search engine built with React, TypeScript, Next.js API routes and MongoDB
            </p>
            <a target="_blank" rel="noopener noreferrer" href='https://recipe4me.vercel.app/' className="text-base sm:text-xl xl:text-2xl mb-2 md:mb-5">
              <h3>
                APPLICATION
              </h3>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rabreu2/recipe4me' className="text-base sm:text-xl xl:text-2xl mb-2 md:mb-5">
              <h3>
                CODEBASE
              </h3>
            </a>
          </motion.div>
        </div>

        <div className="flex w-full justify-end mb-[65px] sm:mb-[120px] md:mb-[75px] lg:mb-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="relative text-white text-right flex flex-col items-end justify-center left-[2.5rem] md:left-[5rem]">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-2 md:mb-5">JankJep (WIP)</h2>
            <p className="text-xs sm:text-sm md:text-base xl:text-xl max-w-md mb-2 md:mb-5">
              Jeopardy! inspired game built with React, TypeScript, Next.js API routes and Cluebase API
            </p>
            <a target="_blank" rel="noopener noreferrer" href='https://www.jankjep.com/' className="text-base sm:text-xl xl:text-2xl mb-2 md:mb-5">
              <h3>
                APPLICATION
              </h3>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rabreu2/jank-jep' className="text-base sm:text-xl xl:text-2xl mb-2 md:mb-5">
              <h3>
                CODEBASE
              </h3>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="z-[100] flex items-center justify-end min-w-[17rem] min-h-[13rem] sm:min-w-[25rem] sm:min-h-[17rem] md:min-w-[33rem] md:min-h-[22rem] lg:min-w-[48rem] lg:min-h-[30rem] xl:min-w-[55rem] xl:min-h-[36rem] 2xl:min-w-[65rem] 2xl:min-h-[43rem] bg-[linear-gradient(_to_bottom_right,rgba(255,255,255,0.33),rgba(86,196,149,0.33)_)]">
            <Image
              src={JankJepPreview}
              alt="JankJep Page Preview"
              className="z-[100] w-[13rem] sm:w-[20rem] md:w-[26rem] lg:w-[40rem] xl:w-[47rem] 2xl:w-[55rem]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}