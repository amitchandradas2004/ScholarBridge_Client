"use client";

import { motion } from "framer-motion";
import { Inter, Sora } from "next/font/google";
import Link from "next/link";
import { HiArrowRight, HiOutlineAcademicCap } from "react-icons/hi2";
import { PiBookOpenBold, PiGlobeHemisphereWestBold } from "react-icons/pi";
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
    <section className="relative overflow-hidden bg-[#0B1120]">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-indigo-600 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-linear(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="container relative mx-auto flex min-h-[90vh] flex-row items-center justify-between px-6 py-24">
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
            className={`inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-xl ${inter.className}`}
          >
            <HiOutlineAcademicCap />
            Discover Global Opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${sora.className} mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl`}
          >
            Find Your Dream
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Scholarship
            </span>
            <br />
            Without the Stress.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-8 max-w-xl text-sm leading-7 text-slate-300 lg:text-lg ${inter.className}`}
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
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(79,70,229,0.45)] transition hover:from-indigo-500 hover:to-cyan-400"
              >
                Get Started
                <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/scholarships"
                className="rounded-xl border border-slate-700 bg-white/5 px-7 py-4 font-semibold text-slate-200 backdrop-blur-xl transition hover:border-cyan-400 hover:bg-white/10"
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
              <h3 className="text-3xl font-bold text-cyan-400">5000+</h3>

              <p className={`${inter.className} mt-1 text-slate-400`}>
                Scholarships
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">120+</h3>

              <p className={`${inter.className} mt-1 text-slate-400`}>
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">300+</h3>

              <p className={`${inter.className} mt-1 text-slate-400`}>
                Universities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}

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
            className="relative flex h-64 w-64 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 via-blue-600 to-cyan-500 shadow-[0_0_80px_rgba(59,130,246,0.45)] md:h-72 md:w-72 lg:h-96 lg:w-96"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500/30 to-cyan-400/30 blur-2xl" />

            <HiOutlineAcademicCap className="relative z-10 text-[110px] text-white md:text-[130px] lg:text-[170px]" />
          </motion.div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-3 top-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:-left-4 md:top-8 lg:-left-10 lg:top-10 lg:p-5"
          >
            <PiBookOpenBold className="text-4xl text-cyan-400" />

            <p
              className={`${inter.className} mt-2 text-xs font-medium text-slate-200 lg:text-sm`}
            >
              100% Funded
            </p>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -right-2 bottom-8 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:-right-2 md:bottom-10 lg:-right-6 lg:bottom-16 lg:p-5"
          >
            <PiGlobeHemisphereWestBold className="text-4xl text-amber-400" />

            <p
              className={`${inter.className} mt-2 text-xs font-medium text-slate-200 lg:text-sm`}
            >
              Global Universities
            </p>
          </motion.div>

          {/* Floating Card 3 */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute left-10 bottom-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
          >
            <h3
              className={`${sora.className} text-2xl font-bold text-cyan-400`}
            >
              300+
            </h3>

            <p className={`${inter.className} text-xs text-slate-300`}>
              Top Universities
            </p>
          </motion.div>

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-75 w-75 rounded-full border border-cyan-400/30 md:h-85 md:w-85 lg:h-[430px] lg:w-[430px]"
          />

          {/* Outer Ring */}

          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-indigo-400/20 md:h-[360px] md:w-[360px] lg:h-[500px] lg:w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
