"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

const faqs = [
  {
    question: "What is ScholarBridge?",
    answer:
      "ScholarBridge is a scholarship discovery platform that helps students find scholarships from universities around the world in one place.",
  },
  {
    question: "Is ScholarBridge free to use?",
    answer:
      "Yes. Browsing, searching, filtering, and saving scholarships are completely free for every student.",
  },
  {
    question: "Can I apply for scholarships through ScholarBridge?",
    answer:
      "No. ScholarBridge redirects you to the official scholarship website so you can apply directly from the scholarship provider.",
  },
  {
    question: "How often are scholarships updated?",
    answer:
      "New scholarship opportunities are added regularly, and expired scholarships are automatically removed or marked as closed.",
  },
  {
    question: "Can I add scholarships?",
    answer:
      "Yes. Registered users can contribute scholarship opportunities to help other students discover them.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#030712,#050b18,#030712)]" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-105 w-105 rounded-full bg-indigo-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-xl">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 font-heading text-4xl font-black text-white md:text-5xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              To Know
            </span>
          </h2>

          <p className="font-body mt-6 text-lg leading-8 text-slate-400">
            Have questions? We've answered the most common ones to help you get
            started with ScholarBridge.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
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
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="rounded-full border border-slate-700 bg-slate-800 p-2"
                  >
                    {isOpen ? (
                      <HiMinus className="text-xl text-indigo-400" />
                    ) : (
                      <HiPlus className="text-xl text-indigo-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="border-t border-slate-800 px-8 pb-7 pt-5">
                        <p className="font-body leading-8 text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

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
            delay: 0.3,
          }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Still Have Questions?
            </h3>

            <p className="font-body mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Our team is here to help you with scholarships, applications,
              eligibility, and everything in between. Feel free to reach out
              anytime.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-500"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
