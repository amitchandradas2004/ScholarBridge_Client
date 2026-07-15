"use client";

import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "support@scholarbridge.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We usually reply within 24-48 hours.",
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-25 text-white">
      <div className="mx-auto container">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-400"
          >
            <GraduationCap size={18} />
            Contact ScholarBridge
          </motion.div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Get In Touch With Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have questions about scholarships, need support, or want to
            collaborate with ScholarBridge? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}

          <div className="space-y-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur"
                >
                  <Icon className="mb-4 text-indigo-400" />

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <MessageSquare className="text-indigo-400" />

                <h2 className="text-2xl font-semibold">Send a Message</h2>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
