"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBuildingLibrary,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    title: "Scholarships",
    description: "Active scholarships from universities worldwide.",
    icon: HiOutlineAcademicCap,
    linear: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/20",
  },
  {
    id: 2,
    value: 120,
    suffix: "+",
    title: "Countries",
    description: "Scholarships available across the globe.",
    icon: HiOutlineGlobeAlt,
    linear: "from-sky-500 to-cyan-500",
    glow: "shadow-cyan-500/20",
  },
  {
    id: 3,
    value: 300,
    suffix: "+",
    title: "Universities",
    description: "Top-ranked universities and institutions.",
    icon: HiOutlineBuildingLibrary,
    linear: "from-fuchsia-500 to-pink-500",
    glow: "shadow-fuchsia-500/20",
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
    glow: "shadow-emerald-500/20",
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#030712] py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1120] to-slate-950" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-32 -top-32 h-105 w-105 rounded-full bg-indigo-600/20 blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-115 w-115 rounded-full bg-cyan-500/15 blur-[130px]"
      />

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-20 h-52 w-52 rounded-full bg-white/5 blur-[120px]"
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
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-indigo-300 backdrop-blur-xl">
            📊 Trusted Worldwide
          </span>

          <h2 className="font-heading mt-7 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Numbers That Build
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Student Confidence
            </span>
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Every number represents students discovering opportunities,
            universities opening doors, and dreams turning into reality.
          </p>
        </motion.div>

        {/* Statistics Cards */}

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
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl ${stat.glow}`}
              >
                {/* Card Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${stat.linear} opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125`}
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
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.linear} text-white shadow-xl`}
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

                  <h4 className="font-heading mt-4 text-2xl font-bold text-white">
                    {stat.title}
                  </h4>

                  <p className="font-body mt-4 leading-7 text-slate-400">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-cyan-400/40" />

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

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Start Your Scholarship Journey Today
            </h3>

            <p className="font-body mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Join thousands of students discovering scholarships from the
              world's leading universities. Your dream education is only one
              click away.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8"
            >
              <Link
                href="/scholarships"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-400/30"
              >
                Explore Scholarships
                <HiArrowRight className="text-lg" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
