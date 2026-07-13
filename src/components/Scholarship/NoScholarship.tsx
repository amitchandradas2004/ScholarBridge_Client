"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, SearchX, Plus } from "lucide-react";

const NoScholarship = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[500px] items-center justify-center"
    >
      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600/20 to-cyan-500/20"
        >
          <SearchX className="h-12 w-12 text-indigo-400" />
        </motion.div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold text-white">
          No Scholarships Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-400">
          We couldn't find any scholarships at the moment. New opportunities
          are added regularly, so check back later or contribute by adding one.
        </p>

        {/* Decorative Badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
          <GraduationCap size={18} />
          Help students discover opportunities
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
            >
              Back to Home
            </motion.button>
          </Link>

          <Link href="/addScholarships">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:shadow-indigo-600/40"
            >
              <Plus size={18} />
              Add Scholarship
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NoScholarship;