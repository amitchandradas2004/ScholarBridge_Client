"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Inter, Sora } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {
  HiEye,
  HiEyeSlash,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlinePhoto,
  HiOutlineUser,
} from "react-icons/hi2";

const sora = Sora({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { resolvedTheme } = useTheme();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    toast.success(
      <div>
        <h2 className="font-heading text-lg font-bold">
          Welcome to ScholarBridge!
        </h2>

        <p className="font-body mt-1 text-sm opacity-80">
          Your account has been created successfully.
        </p>
      </div>,
      {
        icon: "🎉",
        style:
          resolvedTheme === "dark"
            ? {
                background: "#0f172a",
                color: "#f8fafc",
                border: "1px solid #334155",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,.45)",
              }
            : undefined,
      },
    );

    console.log(data);
  };

  return (
    <section
      className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-indigo-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 py-24 transition-colors duration-500`}
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-300 dark:bg-indigo-700 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-300 dark:bg-cyan-700 blur-3xl"
      />

      <div className="container relative mx-auto grid items-center gap-14 md:grid-cols-2">
        {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="hidden md:block"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 px-5 py-2 font-semibold text-indigo-700 dark:text-indigo-300">
            <HiOutlineAcademicCap />
            Join ScholarBridge
          </span>

          <h1
            className={`${sora.className} mt-8 text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white`}
          >
            Start Your
            <span className="block bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Scholarship Journey
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover thousands of scholarships from universities across the
            globe. Create your free account and save your favorite opportunities
            in one place.
          </p>

          {/* Floating Illustration */}

          <div className="relative mt-20 flex justify-center">
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="flex h-80 w-80 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 to-cyan-500 shadow-[0_20px_80px_rgba(59,130,246,.35)]"
            >
              <HiOutlineAcademicCap className="text-[150px] text-white" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border-2 border-dashed border-indigo-300 dark:border-indigo-500/40"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-0 top-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 p-5 shadow-xl"
            >
              🎓
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                5000+ Scholarships
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-12 right-0 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 p-5 shadow-xl"
            >
              🌍
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                120+ Countries
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Signup Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 md:p-10"
        >
          <div className="text-center">
            <h2
              className={`${sora.className} text-4xl font-black text-slate-900 dark:text-white`}
            >
              Create Account
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Join ScholarBridge for free today.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            {/* Name */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Full Name
              </label>

              <div className="relative">
                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 dark:text-slate-500" />

                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 dark:text-slate-500" />

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>

              <div className="relative">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 dark:text-slate-500" />

                <input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-14 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {showPassword ? (
                    <HiEyeSlash className="text-xl" />
                  ) : (
                    <HiEye className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Image URL */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Profile Image URL
              </label>

              <div className="relative">
                <HiOutlinePhoto className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 dark:text-slate-500" />

                <input
                  required
                  name="image"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900"
                />
              </div>
            </div>

            {/* Terms */}

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary mt-1"
              />

              <span className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                I agree to the{" "}
                <Link
                  href="/"
                  className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/"
                  className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* Submit */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full cursor-pointer rounded-2xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Create Account
            </motion.button>
          </form>

          {/* Divider */}

          <div className="relative py-8">
            <div className="border-t border-slate-200 dark:border-slate-700" />

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              OR
            </span>
          </div>

          {/* Google */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-4 font-semibold text-slate-700 transition hover:border-indigo-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-700"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </motion.button>

          {/* Login */}

          <p className="pt-6 text-center text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
