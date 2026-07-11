"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PiGraduationCapFill, PiBookOpenFill } from "react-icons/pi";
import { HiArrowRight, HiHome } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-20">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-400 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-112 w-md rounded-full bg-yellow-300 blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-16 top-24 hidden text-8xl text-blue-500/20 lg:block"
      >
        <PiGraduationCapFill />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-16 right-16 hidden text-8xl text-amber-400/30 lg:block"
      >
        <PiBookOpenFill />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/60 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-5xl text-white shadow-lg"
        >
          <PiGraduationCapFill />
        </motion.div>

        {/* 404 */}
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Oops! This Scholarship Does not Exist
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          The page you ore looking for may have expired, been moved, or never
          existed. Do not worry—there are thousands of scholarship opportunities
          waiting to be discovered.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Explore Scholarships
              <HiArrowRight />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              <HiHome />
              Back Home
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-slate-400">
          ScholarBridge • Discover. Save. Apply. Achieve.
        </p>
      </motion.div>
    </main>
  );
}
