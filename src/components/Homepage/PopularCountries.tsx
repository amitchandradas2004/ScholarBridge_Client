"use client";

import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-300 blur-3xl"
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
            className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200 blur-3xl"
          />
        </div>
        <div className="relative text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
            🌍 Study Abroad
          </span>

          <h2 className="font-heading mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Popular Scholarship Destinations
          </h2>

          <p className="font-body mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore thousands of scholarships from the world's most prestigious
            universities and study destinations.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4 px-10 md:px-0">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 text-center shadow-lg backdrop-blur-xl transition-all duration-300">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

                <motion.span
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="block text-6xl"
                >
                  {country.flag}
                </motion.span>

                <h3 className="font-heading mt-5 text-xl font-bold text-slate-900">
                  {country.name}
                </h3>

                <p className="font-body mt-2 text-slate-500">
                  {country.scholarships} Scholarships
                </p>

                <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-indigo-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
