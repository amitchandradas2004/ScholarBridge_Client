"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PiBookOpenFill } from "react-icons/pi";
import logo from "@/Assets/logo.png";
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Glow */}
      <div className="absolute h-125 w-125 rounded-full bg-blue-100 blur-3xl opacity-70" />

      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-36 w-36 rounded-full border-[6px] border-blue-200 border-t-indigo-600"
        />

        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl"
        >
          {/* Replace with your logo */}
          <Image
            src={logo}
            alt="ScholarBridge"
            width={64}
            height={64}
            priority
          />
        </motion.div>

        {/* Floating Book */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute -right-8 -top-4 text-3xl text-amber-500"
        >
          <PiBookOpenFill />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="mt-14 text-2xl font-bold text-slate-800"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Finding Scholarships...
        </motion.h2>

        <motion.p
          className="mt-2 text-slate-500"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
          }}
        >
          Preparing opportunities for you
        </motion.p>

        {/* Animated Dots */}
        <div className="mt-6 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-3 w-3 rounded-full bg-indigo-600"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
