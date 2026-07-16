"use client";

import Logo from "@/Assets/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { HiArrowRight, HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Add Scholarship", href: "/addScholarships" },
  { name: "My Scholarships", href: "/myScholarships" },
];

const resources = [
  { name: "Popular Countries", href: "/popularCountries" },
  { name: "Success Stories", href: "/successStories" },
  { name: "FAQ", href: "/faq" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacyPolicyPage" },
  { name: "Terms & Conditions", href: "/termsAndConditions" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Animated Top Border */}

      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-1 bg-linear-to-r from-indigo-500 via-cyan-400 to-violet-500 bg-size-[300%_100%]"
      />

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-80, 100, -80],
            y: [-30, 40, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [60, -80, 60],
            y: [30, -40, 30],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-6 py-20">
        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Left */}

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
              duration: 0.6,
            }}
          >
            {/* Logo */}

            <Link href="/" className="flex items-center gap-4">
              <Image src={Logo} alt="ScholarBridge" width={56} height={56} />

              <div>
                <h2 className="font-heading text-3xl font-black">
                  ScholarBridge
                </h2>

                <p className="font-body text-sm text-cyan-300">
                  Discover. Save. Apply. Achieve.
                </p>
              </div>
            </Link>

            <p className="font-body mt-8 max-w-xl leading-8 text-slate-300">
              ScholarBridge helps students discover scholarships from
              universities across the world. Search, filter, save, and explore
              opportunities that match your academic goals — all from one
              beautifully designed platform.
            </p>

            {/* Social Icons */}

            <div className="mt-10 flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:bg-cyan-500"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter */}

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
              delay: 0.2,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
              Newsletter
            </span>

            <h3 className="mt-6 font-heading text-3xl font-bold">
              Stay Updated
            </h3>

            <p className="font-body mt-5 leading-7 text-slate-300">
              Get notified whenever new scholarships are added to ScholarBridge.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-400 focus:border-cyan-400"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 to-cyan-500 py-4 font-semibold shadow-xl"
              >
                Subscribe
                <HiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
        {/* Links */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading mb-6 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-slate-300 transition duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading mb-6 text-xl font-bold">Resources</h3>

            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-slate-300 transition duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-heading mb-6 text-xl font-bold">Legal</h3>

            <ul className="space-y-4">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-slate-300 transition duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-heading mb-6 text-xl font-bold">Contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <HiEnvelope className="text-lg text-cyan-400" />
                </div>

                <div>
                  <p className="font-body text-sm text-slate-400">Email</p>

                  <p className="font-body text-slate-200">
                    support@scholarbridge.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <HiMapPin className="text-lg text-cyan-400" />
                </div>

                <div>
                  <p className="font-body text-sm text-slate-400">Location</p>

                  <p className="font-body text-slate-200">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <HiPhone className="text-lg text-cyan-400" />
                </div>

                <div>
                  <p className="font-body text-sm text-slate-400">Phone</p>

                  <p className="font-body text-slate-200">+880 1XXX-XXXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col items-center justify-between gap-6 text-center md:flex-row"
        >
          {/* Left */}

          <div>
            <p className="font-body text-sm text-slate-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">ScholarBridge</span>.
              All rights reserved.
            </p>

            <p className="font-body mt-2 text-sm text-slate-500">
              Discover. Save. Apply. Achieve.
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500"
                >
                  <Icon className="text-lg text-white" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Dots */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-10 top-28 h-3 w-3 rounded-full bg-cyan-400"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-20 top-40 h-4 w-4 rounded-full bg-indigo-400"
      />

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-1/3 h-2.5 w-2.5 rounded-full bg-violet-400"
      />

      {/* Background Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-linear(to right, white 1px, transparent 1px), linear-linear(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </footer>
  );
}
