"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { Inter, Sora } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {
  HiEye,
  HiEyeSlash,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
} from "react-icons/hi2";

const sora = Sora({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: loginData.email as string,
      password: loginData.password as string,
    });

    if (data?.token) {
      toast.success(
        <div>
          <h3 className="font-heading text-base font-bold text-slate-900">
            Welcome Back!
          </h3>

          <p className="font-body mt-1 text-sm text-slate-600">
            You have successfully signed in to{" "}
            <span className="font-semibold text-indigo-600">ScholarBridge</span>
            . Continue exploring scholarships around the world.
          </p>
        </div>,
      );
      router.push("/");
    }
    if (error) {
      toast.error(error?.message as string);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <section
      className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-indigo-50 to-cyan-50 px-6 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`}
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-300 blur-3xl dark:bg-indigo-700/30"
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
        className="absolute bottom-0 right-0 h-112 w-md rounded-full bg-cyan-300 blur-3xl dark:bg-cyan-600/20"
      />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
            <HiOutlineAcademicCap />
            Welcome Back
          </span>

          <h1
            className={`${sora.className} mt-8 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl`}
          >
            Continue Your
            <span className="block bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Scholarship Journey
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Sign in to access your saved scholarships, manage your
            opportunities, and continue exploring universities from around the
            world.
          </p>

          {/* Illustration */}

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
              className="absolute h-90 w-90 rounded-full border-2 border-dashed border-indigo-300 dark:border-indigo-700"
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-0 top-10 rounded-2xl bg-white p-5 shadow-xl dark:border dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="text-2xl">🔖</span>

              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                Saved Scholarships
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
              className="absolute bottom-10 right-0 rounded-2xl bg-white p-5 shadow-xl dark:border dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="text-2xl">🌍</span>

              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                Global Opportunities
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Login Card */}

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
          className="rounded-4xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 md:p-10"
        >
          <div className="text-center">
            <h2
              className={`${sora.className} text-4xl font-black text-slate-900 dark:text-white`}
            >
              Sign In
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Welcome back to ScholarBridge.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            {/* Email */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 dark:text-slate-500" />

                <input
                  type="email"
                  name="email"
                  required
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
                  name="password"
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* Login Button */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full cursor-pointer rounded-2xl bg-linear-to-r from-indigo-600 to-cyan-500 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}

          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                OR
              </span>
            </div>
          </div>

          {/* Google */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-4 font-semibold text-slate-700 transition hover:border-indigo-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-700"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </motion.button>

          {/* Bottom */}

          <p className="pt-6 text-center text-slate-600 dark:text-slate-400">
            Do not have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Create Account
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
