"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-10 px-5 py-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="relative h-[52px] w-[min(16.5rem,46vw)] md:h-[84px] md:w-[21rem]">
          <Image
            src="/images/logo.png"
            alt="Logo Remedic"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>
    </motion.header>
  );
}
