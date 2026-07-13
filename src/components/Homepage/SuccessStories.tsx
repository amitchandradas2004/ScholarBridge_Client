"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { HiStar } from "react-icons/hi2";

const stories = [
  {
    id: 1,
    name: "Sarah Ahmed",
    country: "Canada",
    university: "University of Toronto",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "ScholarBridge made finding scholarships incredibly easy. Within weeks, I discovered a fully funded Master's opportunity that perfectly matched my profile.",
    scholarship: "Master's Scholarship",
  },
  {
    id: 2,
    name: "David Kim",
    country: "Japan",
    university: "The University of Tokyo",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "Instead of searching dozens of websites, I found everything in one place. The filtering system saved me hours every week.",
    scholarship: "Research Fellowship",
  },
  {
    id: 3,
    name: "Maria Garcia",
    country: "Germany",
    university: "Technical University of Munich",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The platform helped me discover scholarships I never knew existed. It completely changed my study abroad journey.",
    scholarship: "DAAD Scholarship",
  },
  {
    id: 4,
    name: "James Wilson",
    country: "Australia",
    university: "University of Melbourne",
    image: "https://i.pravatar.cc/150?img=18",
    quote:
      "I found my dream postgraduate scholarship within days. ScholarBridge made the process simple and stress-free.",
    scholarship: "Graduate Research Scholarship",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    country: "United Kingdom",
    university: "University of Oxford",
    image: "https://i.pravatar.cc/150?img=45",
    quote:
      "The country and funding filters helped me narrow down opportunities that perfectly matched my academic goals.",
    scholarship: "Clarendon Scholarship",
  },
  {
    id: 6,
    name: "Chen Wei",
    country: "China",
    university: "Tsinghua University",
    image: "https://i.pravatar.cc/150?img=20",
    quote:
      "ScholarBridge saved me weeks of searching. Everything I needed was available in one platform.",
    scholarship: "International Excellence Award",
  },
  {
    id: 7,
    name: "Emily Johnson",
    country: "USA",
    university: "Harvard University",
    image: "https://i.pravatar.cc/150?img=24",
    quote:
      "The scholarship recommendations were surprisingly accurate and helped me achieve my dream.",
    scholarship: "Harvard Graduate Fellowship",
  },
  {
    id: 8,
    name: "Lucas Silva",
    country: "Brazil",
    university: "University of British Columbia",
    image: "https://i.pravatar.cc/150?img=26",
    quote:
      "Thanks to ScholarBridge, I secured funding that made studying abroad financially possible.",
    scholarship: "International Leader Scholarship",
  },
  {
    id: 9,
    name: "Fatima Noor",
    country: "Sweden",
    university: "Lund University",
    image: "https://i.pravatar.cc/150?img=39",
    quote:
      "I loved how easy it was to compare scholarships from multiple universities.",
    scholarship: "Swedish Institute Scholarship",
  },
  {
    id: 10,
    name: "Michael Brown",
    country: "Netherlands",
    university: "Delft University of Technology",
    image: "https://i.pravatar.cc/150?img=15",
    quote:
      "ScholarBridge became my daily resource while applying for international scholarships.",
    scholarship: "Excellence Scholarship",
  },
  {
    id: 11,
    name: "Sophia Martinez",
    country: "Spain",
    university: "University of Barcelona",
    image: "https://i.pravatar.cc/150?img=31",
    quote:
      "The platform introduced me to opportunities I had never heard about before.",
    scholarship: "Global Merit Scholarship",
  },
  {
    id: 12,
    name: "Ali Hassan",
    country: "Turkey",
    university: "Middle East Technical University",
    image: "https://i.pravatar.cc/150?img=14",
    quote:
      "Everything was organized beautifully. Finding scholarships became enjoyable.",
    scholarship: "Türkiye Scholarship",
  },
  {
    id: 13,
    name: "Olivia Green",
    country: "Ireland",
    university: "Trinity College Dublin",
    image: "https://i.pravatar.cc/150?img=33",
    quote:
      "The clean interface and advanced search made my scholarship search effortless.",
    scholarship: "Global Excellence Award",
  },
  {
    id: 14,
    name: "Noah Taylor",
    country: "New Zealand",
    university: "University of Auckland",
    image: "https://i.pravatar.cc/150?img=16",
    quote:
      "ScholarBridge simplified every step of my international education journey.",
    scholarship: "International Student Scholarship",
  },
  {
    id: 15,
    name: "Priya Sharma",
    country: "India",
    university: "ETH Zurich",
    image: "https://i.pravatar.cc/150?img=49",
    quote:
      "Within a month I had shortlisted and applied for five amazing scholarships.",
    scholarship: "Excellence Master's Scholarship",
  },
  {
    id: 16,
    name: "Daniel Evans",
    country: "Switzerland",
    university: "ETH Zurich",
    image: "https://i.pravatar.cc/150?img=19",
    quote:
      "The scholarship details were accurate and always linked to official sources.",
    scholarship: "ETH Excellence Scholarship",
  },
  {
    id: 17,
    name: "Hana Suzuki",
    country: "Japan",
    university: "Kyoto University",
    image: "https://i.pravatar.cc/150?img=37",
    quote:
      "ScholarBridge helped me discover funding opportunities that I couldn't find elsewhere.",
    scholarship: "MEXT Scholarship",
  },
  {
    id: 18,
    name: "Ahmed El-Sayed",
    country: "Egypt",
    university: "University of Edinburgh",
    image: "https://i.pravatar.cc/150?img=8",
    quote:
      "This platform gave me confidence throughout my scholarship application process.",
    scholarship: "Global Research Award",
  },
  {
    id: 19,
    name: "Anna Petrova",
    country: "Finland",
    university: "University of Helsinki",
    image: "https://i.pravatar.cc/150?img=34",
    quote:
      "I found scholarship opportunities that matched both my major and career goals.",
    scholarship: "International Talent Scholarship",
  },
  {
    id: 20,
    name: "Mohammed Rahman",
    country: "Germany",
    university: "RWTH Aachen University",
    image: "https://i.pravatar.cc/150?img=10",
    quote:
      "ScholarBridge saved me countless hours by organizing scholarships in one place.",
    scholarship: "Engineering Excellence Scholarship",
  },
  {
    id: 21,
    name: "Grace Lee",
    country: "South Korea",
    university: "KAIST",
    image: "https://i.pravatar.cc/150?img=28",
    quote:
      "I highly recommend ScholarBridge to every student planning to study abroad.",
    scholarship: "KAIST International Scholarship",
  },
  {
    id: 22,
    name: "Victor Mendes",
    country: "Portugal",
    university: "University of Lisbon",
    image: "https://i.pravatar.cc/150?img=22",
    quote:
      "The scholarship dashboard kept all my saved opportunities organized.",
    scholarship: "Merit Scholarship",
  },
  {
    id: 23,
    name: "Isabella Rossi",
    country: "Italy",
    university: "University of Bologna",
    image: "https://i.pravatar.cc/150?img=42",
    quote:
      "ScholarBridge was the best resource I found while preparing for my studies abroad.",
    scholarship: "International Excellence Award",
  },
  {
    id: 24,
    name: "Benjamin Clark",
    country: "USA",
    university: "Stanford University",
    image: "https://i.pravatar.cc/150?img=6",
    quote:
      "The platform made scholarship searching simple, organized, and incredibly effective.",
    scholarship: "Stanford Knight-Hennessy Scholarship",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[linear-linear(to_bottom,#030712,#050b18,#030712)]" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute right-0 top-10 h-105 w-105 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [-12, 12, -12],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px]" />

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
            💙 Student Success Stories
          </span>

          <h2 className="mt-6 font-heading text-4xl font-black text-white md:text-5xl">
            Dreams Turned Into
            <span className="block bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Real Achievements
            </span>
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Thousands of students have used ScholarBridge to discover
            life-changing scholarship opportunities from leading universities
            around the world.
          </p>
        </motion.div>

        {/* Testimonial Cards */}

        <div className="mt-20">
          <Marquee speed={45} className="py-4">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative mx-4 flex h-full w-90 flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50"
              >
                {/* Rating */}

                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-xl text-amber-400" />
                  ))}
                </div>

                {/* Quote */}

                <p className="min-h-32.5 leading-8 text-slate-300">
                  {story.quote}
                </p>

                {/* Student */}

                <div className="mt-6 flex items-center gap-4">
                  <motion.img
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    src={story.image}
                    alt={story.name}
                    className="h-16 w-16 rounded-full border-2 border-indigo-500/40 object-cover"
                  />

                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {story.name}
                    </h3>

                    <p className="text-sm text-slate-400">{story.university}</p>

                    <p className="text-sm text-indigo-400">
                      📍 {story.country}
                    </p>
                  </div>
                </div>

                {/* Badge */}

                <div className="mt-5 inline-flex w-fit rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300">
                  🎓 {story.scholarship}
                </div>

                <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-indigo-500/40" />
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Your Story Could Be Next
            </h3>

            <p className="font-body mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Explore scholarships from the world's leading universities, save
              your favorites, and take the next step toward achieving your
              academic dreams.
            </p>

            <motion.a
              href="/scholarships"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-500"
            >
              Explore Scholarships
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
