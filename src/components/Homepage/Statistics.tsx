"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineBuildingLibrary,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

const stats = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    title: "Scholarships",
    description: "Active scholarships from universities worldwide.",
    icon: HiOutlineAcademicCap,
    linear: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-300/50",
  },
  {
    id: 2,
    value: 120,
    suffix: "+",
    title: "Countries",
    description: "Scholarships available across the globe.",
    icon: HiOutlineGlobeAlt,
    linear: "from-sky-500 to-cyan-500",
    glow: "shadow-cyan-300/50",
  },
  {
    id: 3,
    value: 300,
    suffix: "+",
    title: "Universities",
    description: "Top-ranked universities and institutions.",
    icon: HiOutlineBuildingLibrary,
    linear: "from-fuchsia-500 to-pink-500",
    glow: "shadow-fuchsia-300/50",
  },
  {
    id: 4,
    value: 150,
    prefix: "$",
    suffix: "M+",
    title: "Funding",
    description: "Scholarship funding available every year.",
    icon: HiOutlineCurrencyDollar,
    linear: "from-emerald-500 to-green-600",
    glow: "shadow-emerald-300/50",
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-linear-to-br from-indigo-800 via-blue-800 to-cyan-800 py-28"
    >
      {/* Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-cyan-300/30 blur-3xl"
      />

      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
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
          <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md">
            📊 Trusted Worldwide
          </span>

          <h2 className="mt-7 font-heading text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Numbers That Inspire
            <br />
            Confidence
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            ScholarBridge connects ambitious students with thousands of
            scholarships, universities, and funding opportunities from around
            the world.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl ${stat.glow}`}
              >
                {/* Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-linear-to-br ${stat.linear} opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${stat.linear} text-white shadow-xl`}
                >
                  <Icon className="text-3xl" />
                </motion.div>

                {/* Number */}
                <div className="mt-8">
                  <h3 className="font-heading text-5xl font-black text-white">
                    {stat.prefix}

                    {inView && (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    )}

                    {stat.suffix}
                  </h3>

                  <h4 className="mt-4 font-heading text-2xl font-bold text-white">
                    {stat.title}
                  </h4>

                  <p className="font-body mt-4 leading-7 text-blue-100">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-white/40" />

                {/* Decorative Dots */}
                <div className="absolute bottom-5 right-5 flex gap-1 opacity-40">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-4xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Your Scholarship Journey Starts Here
            </h3>

            <p className="font-body mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Discover thousands of scholarships, save your favorites, and take
              the next step toward studying at your dream university.
            </p>

            <motion.a
              href="/scholarships"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-xl transition hover:bg-slate-100"
            >
              Explore Scholarships →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
