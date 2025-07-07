'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import Java from '@/public/Java_logo.png';
import SQL from '@/public/sql_logo.png';
import Python from '@/public/Python-logo.png';
import Spring from '@/public/spring_logo.png';
import Typescript from '@/public/Typescript_logo.png';
import Next from '@/public/next-js_logo.png';
import Git from '@/public/Git_icon.png';
import Image from "next/image";


const VerticalBar = styled.div`
  width: 2px;
  height: 500px;
  background-color: grey;
  margin: 0 4vw 0 3vw;
`

const Row = styled.div<{ odd?: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: -24px;
  ${({ odd }) => odd && `position: relative;`}
`;

const Hex = styled.div`
  width: 175px;
  height: 175px;
  @media (max-width: 640px) {
    width: 130px;
    height: 130px;
    margin: 0 6px;
  }
  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
    margin: 0 4px;
  }
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.33),
    rgba(86, 196, 149, 0.33)   
  );
  box-shadow: 10px 10px 5px #000;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 0.7s;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function About() {

  return (
    <div className="flex flex-col text-center justify-center bg-black">
      <h1 className="text-white text-5xl sm:text-7xl sm:mt-0 mt-11 mb-[85px]">About Me</h1>
      <div className="flex flex-col xl:flex-row justify-center items-center space-y-12 xl:space-y-0 xl:space-x-12">
        <div className="text-white max-w-xl text-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="flex flex-col items-center text-white text-lg sm:text-xl leading-relaxed max-w-xl space-y-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1.5"
              className="stroke-1 max-w-md opacity-[33%] mb-[-50px]"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="#56c495" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 18a8.25 8.25 0 0115 0"
              />
            </svg>
            <p className="mx-2 my-0">
            Lasting over a decade (and counting!), my passion for software
            development began back in high school. What started as a love
            for Java and SQL has evolved into a full-stack journey,
            leading me to React, Next.js and TypeScript, as I enjoy staying
            current with modern web technologies. A big part of what keeps me
            excited about development is the satisfaction of solving logical
            problems by building great software. When I am away from my
            keyboard you can probably find me spending time with my daughter,
            playing basketball, or shouting at the TV like the Knicks
            and Giants can actually hear me.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="hidden xl:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <VerticalBar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          className="flex flex-col items-center text-white text-xl leading-relaxed max-w-xl space-y-4"
        >
          <div className="mb-7">
            <Row odd>
              <Hex>
                <Image
                  src={Java}
                  alt="Java Logo"
                  className="w-[50px] sm:w-[75px]"
                  priority
                />
              </Hex>
              <Hex>
                <Image
                  src={SQL}
                  alt="SQL Logo"
                  className="w-[60px] sm:w-[90px]"
                  priority
                />
              </Hex>
            </Row>
            <Row>
              <Hex>
                <Image
                  src={Python}
                  alt="Python Logo"
                  className="w-[80px] sm:w-[120px]"
                  priority
                />
              </Hex>
              <Hex>
                <Image
                  src={Spring}
                  alt="Spring Logo"
                  className="w-[80px] sm:w-[120px]"
                  priority
                />
              </Hex>
              <Hex>
                <Image
                  src={Typescript}
                  alt="Typescript Logo"
                  className="w-[70px] sm:w-[105px]"
                  priority
                />
              </Hex>
            </Row>
            <Row odd>
              <Hex>
                <Image
                  src={Next}
                  alt="Next Logo"
                  className="w-[100px] sm:w-[150px]"
                  priority />
              </Hex>
              <Hex>
                <Image
                  src={Git}
                  alt="Git Logo"
                  className="w-[87px] sm:w-[130px]"
                  priority />
              </Hex>
            </Row>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
