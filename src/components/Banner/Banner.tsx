"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineAcademicCap } from "react-icons/hi2";
import { PiBookOpenBold, PiGlobeHemisphereWestBold } from "react-icons/pi";
import { Inter, Sora } from "next/font/google";
export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-slate-50 ">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-indigo-200 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-yellow-200 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex flex-row min-h-[90vh] container items-center justify-between px-6 py-25">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700  ${inter.className}`}
          >
            <HiOutlineAcademicCap />
            Discover Global Opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Find Your Dream
            <br />
            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-indigo-700 bg-clip-text text-transparent">
              Scholarship
            </span>
            <br />
            Without the Stress.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-8 max-w-xl text-xs lg:text-lg leading-5 text-slate-600 ${inter.className}`}
          >
            ScholarBridge helps students discover fully funded, partial,
            undergraduate, master's, and PhD scholarships from universities
            around the world—all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
              >
                Get Started
                <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/scholarships"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
              >
                Explore Scholarships
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex flex-wrap gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-indigo-600">5000+</h3>
              <p className={`text-slate-500  ${inter.className}`}>
                Scholarships
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">120+</h3>
              <p className={`text-slate-500  ${inter.className}`}>Countries</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">300+</h3>
              <p className={`text-slate-500  ${inter.className}`}>
                Universities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:flex items-center justify-center md:w-[45%] lg:w-1/2"
        >
          {/* Main Circle */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="flex h-64 w-64 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 to-cyan-500 shadow-[0_20px_80px_rgba(37,99,235,0.35)] md:h-72 md:w-72 lg:h-96 lg:w-96"
          >
            <HiOutlineAcademicCap className="text-[110px] text-white md:text-[130px] lg:text-[170px]" />
          </motion.div>

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-3 top-6 p-3 rounded-xl bg-white shadow-xl md:-left-4 md:top-8 lg:-left-10 lg:top-10 lg:p-5"
          >
            <PiBookOpenBold className="text-4xl text-indigo-600" />
            <p className="mt-2 text-xs font-semibold lg:text-sm">100% Funded</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -right-2 bottom-8 p-3 rounded-xl bg-white shadow-xl md:-right-2 md:bottom-10 lg:-right-6 lg:bottom-16 lg:p-5"
          >
            <PiGlobeHemisphereWestBold className="text-4xl text-amber-500" />
            <p className="mt-2 text-xs font-semibold lg:text-sm">
              Global Universities
            </p>
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full border-2 border-dashed border-indigo-300 h-75 w-75 md:h-85 md:w-85 lg:h-107.5 lg:w-107.5"
          />
        </motion.div>
      </div>
    </section>
  );
}
