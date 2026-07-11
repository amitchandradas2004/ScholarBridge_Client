"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 py-28">
      {/* Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-105 w-105 rounded-full bg-white/20 blur-3xl"
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
        className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <div className="container relative mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 font-heading text-4xl font-black text-white md:text-5xl">
            Everything You Need
            <span className="block text-cyan-200">To Know</span>
          </h2>

          <p className="font-body mt-6 text-lg leading-8 text-blue-100">
            Have questions? We have answered the most common ones to help you
            get started with ScholarBridge.
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
                className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl"
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
                    className="rounded-full bg-white/15 p-2"
                  >
                    {isOpen ? (
                      <HiMinus className="text-xl text-white" />
                    ) : (
                      <HiPlus className="text-xl text-white" />
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
                      <div className="border-t border-white/10 px-8 pb-7 pt-5">
                        <p className="font-body leading-8 text-blue-100">
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

        {/* Bottom */}

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
          <p className="font-body text-lg text-blue-100">
            Still have questions?
          </p>

          <button className="mt-6 rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-xl transition hover:scale-105">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
