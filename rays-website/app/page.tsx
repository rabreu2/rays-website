'use client'
import styled from "styled-components";
import { motion } from "framer-motion";

const Ray = styled.span`
  color: #56c495;
`

export default function Home() {
  return (
    <div className="flex justify-center bg-black h-[86.3vh] h-xl:h-[calc(100vh-180px)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
      >
        <h1 className="text-[#d9d9d9] font-medium text-center m-0 absolute top-1/2 -translate-y-1/2 text-3xl sm:text-[3.7rem] sm:leading-none">Hello, I&apos;m <Ray>Ray</Ray>.<br />Welcome to my website!</h1>
      </motion.div>
    </div>
  );
}