"use client";

import logo from "@/Assets/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { PiBookOpenFill, PiGraduationCapFill } from "react-icons/pi";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#020617] via-[#0F172A] to-[#111827] py-25">
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.35, 0.18],
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -50, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-linear(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[65px_65px]" />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-20 top-28 hidden text-7xl text-indigo-400/20 lg:block"
      >
        <PiGraduationCapFill />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-28 right-24 hidden text-7xl text-cyan-400/20 lg:block"
      >
        <PiBookOpenFill />
      </motion.div>

      {/* Content */}

      <div className="relative flex flex-col items-center">
        {/* Outer Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl"
        />

        {/* Rotating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-40 w-40 rounded-full border-[3px] border-indigo-500/20 border-t-cyan-400 border-r-indigo-500"
        />

        {/* Dashed Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-56 w-56 rounded-full border border-dashed border-white/10"
        />

        {/* Logo */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 shadow-[0_20px_60px_rgba(79,70,229,0.35)] backdrop-blur-2xl"
        >
          <Image
            src={logo}
            alt="ScholarBridge"
            width={72}
            height={72}
            priority
          />
        </motion.div>

        {/* Floating Book */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute -right-6 -top-2 z-20 text-4xl text-amber-400"
        >
          <PiBookOpenFill />
        </motion.div>

        {/* Loading Text */}

        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-16 bg-linear-to-r from-indigo-300 via-cyan-300 to-blue-400 bg-clip-text text-center text-3xl font-black text-transparent"
        >
          Finding Scholarships...
        </motion.h2>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: 0.3,
          }}
          className="mt-3 max-w-md text-center text-slate-400"
        >
          Searching thousands of global scholarship opportunities just for you.
        </motion.p>

        {/* Progress Bar */}

        <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-blue-500"
          />
        </div>

        {/* Animated Dots */}

        <div className="mt-8 flex items-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -12, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="h-3.5 w-3.5 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.7)]"
            />
          ))}
        </div>

        {/* Bottom Text */}

        <motion.p
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-12 text-center text-sm tracking-[0.25em] uppercase text-slate-500"
        >
          Discover • Save • Apply • Achieve
        </motion.p>
      </div>

      {/* Bottom Glow */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_40px_12px_rgba(34,211,238,0.4)] md:block"
      />
    </main>
  );
}
