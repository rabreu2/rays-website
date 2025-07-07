'use client'
import styled from "styled-components";
import { motion } from "framer-motion";

const Ray = styled.span`
  color: #56c495;
`

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-center"
      >
        <h1 className="text-[#d9d9d9] font-medium text-center m-0 text-3xl sm:text-[3.7rem] sm:leading-none">
          Hello, I&apos;m <Ray>Ray</Ray>.<br />
          Welcome to my website!
        </h1>
      </motion.div>
    </div>
  );
}