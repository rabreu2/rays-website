'use client'

import ContactForm from "@/components/ui/ContactForm";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="flex flex-col text-center items-center xl:justify-center bg-black">
      <h1 className="text-white text-5xl sm:text-7xl sm:mt-0 mt-11 mb-5 xl:mb-[85px]">Contact Me</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ display: 'flex', justifyContent: 'center' }}
        className="m-[1vh] xl:mb-[300px]"
      >
        <div className="bg-[#212121] border border-[#212121] rounded-lg max-w-5xl p-[25px] z-[100]">
          <ContactForm></ContactForm>
        </div>
      </motion.div>
    </div>
  );
}