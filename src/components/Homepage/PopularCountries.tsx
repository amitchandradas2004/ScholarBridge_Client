"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const countries = [
  {
    name: "USA",
    flag: "🇺🇸",
    scholarships: "1,250+",
    href: "/scholarships?country=USA",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    scholarships: "860+",
    href: "/scholarships?country=Canada",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    scholarships: "980+",
    href: "/scholarships?country=UK",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    scholarships: "720+",
    href: "/scholarships?country=Germany",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    scholarships: "540+",
    href: "/scholarships?country=Australia",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    scholarships: "430+",
    href: "/scholarships?country=Japan",
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    scholarships: "250+",
    href: "/scholarships?country=Sweden",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    scholarships: "310+",
    href: "/scholarships?country=Netherlands",
  },
];

export default function PopularCountries() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-[#0B1120] to-slate-950" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <div className="container relative mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-xl">
            🌍 Study Abroad
          </span>

          <h2 className="font-heading mt-6 text-4xl font-black text-white md:text-5xl">
            Popular Scholarship
            <span className="block bg-linear-to-r from-indigo-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore fully funded and partially funded scholarships from the
            world's leading universities.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="relative mt-16 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-0 lg:grid-cols-4">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <div className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10">
                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-indigo-500 via-cyan-400 to-sky-500" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
                </div>

                {/* Flag */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="text-6xl"
                >
                  {country.flag}
                </motion.div>

                {/* Country */}
                <h3 className="font-heading mt-5 text-2xl font-bold text-white transition group-hover:text-cyan-300">
                  {country.name}
                </h3>

                {/* Scholarship Count */}
                <p className="font-body mt-3 text-slate-400">
                  {country.scholarships} Scholarships
                </p>

                {/* Border Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-cyan-400/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-body text-lg text-slate-400">
            Looking for scholarships in another country?
          </p>

          <Link
            href="/scholarships"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105"
          >
            Browse All Scholarships
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
