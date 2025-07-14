'use client'

import styled from "styled-components";
import { motion } from "framer-motion";
import Recipe4MePreview from '@/public/recipe4me-preview.png';
import Image from "next/image";

const ProjectBox = styled.div`
  width: 65rem;
  height: 43rem;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.33),
    rgba(86, 196, 149, 0.33)   
  );
`

export default function Projects() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-7xl sm:mt-0 mt-11 mb-[85px]">
            Projects
          </h1>
        </div>
        <div className="flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="flex items-center w-[65rem] h-[43rem] bg-[linear-gradient(_to_bottom_right,rgba(255,255,255,0.33),rgba(86,196,149,0.33)_)]">
            <Image
              src={Recipe4MePreview}
              alt="Recipe4Me Page Preview"
              className="w-[41rem] sm:w-[55rem]"
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
      </div>
    </div>
  );
}