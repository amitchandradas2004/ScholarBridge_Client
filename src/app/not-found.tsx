"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiHome } from "react-icons/hi2";
import { PiBookOpenFill, PiGraduationCapFill } from "react-icons/pi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#020617] via-[#0F172A] to-[#111827] px-6 py-25">
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -60, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-linear(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px]" />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-24 hidden text-8xl text-indigo-400/15 lg:block"
      >
        <PiGraduationCapFill />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [6, -6, 6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-16 right-16 hidden text-8xl text-cyan-400/15 lg:block"
      >
        <PiBookOpenFill />
      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        {/* Decorative Glow */}

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Animated Icon */}

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 to-cyan-500 shadow-[0_10px_40px_rgba(79,70,229,0.45)]"
        >
          <PiGraduationCapFill className="text-5xl text-white" />
        </motion.div>

        {/* 404 */}

        <motion.h1
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="bg-linear-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        {/* Title */}

        <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Oops! This Scholarship Does not Exist
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          The page you are looking for may have expired, been moved, or never
          existed. Do not worry—thousands of fully funded scholarship
          opportunities are still waiting for you.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-[0_10px_35px_rgba(79,70,229,0.45)] transition-all duration-300 hover:shadow-cyan-500/30"
            >
              Explore Scholarships
              <HiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <HiHome />
              Back Home
            </Link>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Text */}

        <p className="text-sm tracking-wide text-slate-400">
          ScholarBridge • Discover. Save. Apply. Achieve.
        </p>
      </motion.div>

      {/* Bottom Floating Decoration */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_35px_12px_rgba(34,211,238,0.4)] md:block"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-40 left-1/2 hidden h-105 w-105 -translate-x-1/2 rounded-full border border-dashed border-white/5 md:block"
      />
    </main>
  );
}
