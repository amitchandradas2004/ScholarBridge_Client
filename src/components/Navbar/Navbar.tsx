"use client";

import Logo from "@/Assets/logo.png";
import { authClient } from "@/lib/auth-client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success(
      <div>
        <h2 className="font-heading text-lg font-bold">Signed Out</h2>

        <p className="font-body mt-1 text-sm opacity-80">
          You have successfully logged out of your account.
        </p>
      </div>,
      {
        icon: "👋",
      },
    );
    redirect("/");
  };
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = user
    ? [
        { name: "Home", href: "/" },
        { name: "Scholarships", href: "/scholarships" },
        { name: "Add Scholarship", href: "/addScholarships" },
        { name: "My Scholarships", href: "/myScholarships" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Scholarships", href: "/scholarships" },
      ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto container px-2 md:px-0 pt-2">
        <motion.nav
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-5 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.05,
              }}
            >
              <Image
                src={Logo}
                alt="ScholarBridge Logo"
                width={48}
                height={48}
              />
            </motion.div>

            <span className="text-2xl font-black tracking-tight text-white">
              Scholar
              <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Bridge
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-3 lg:flex">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <motion.li
                  key={item.name}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`relative rounded-xl px-4 py-2 font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-2 right-2 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex">
            {isPending ? (
              <div className="h-12 w-25 animate-pulse rounded-full bg-white/10" />
            ) : user ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleSignOut}
                className="cursor-pointer rounded-full bg-red-500 px-6 py-3 font-semibold text-white"
              >
                Logout
              </motion.button>
            ) : (
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-pointer rounded-full bg-linear-to-r from-indigo-600 to-cyan-500 px-7 py-3 font-semibold text-white"
                >
                  Get Started
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl lg:hidden"
          >
            {open ? (
              <HiXMark className="text-2xl" />
            ) : (
              <HiBars3 className="text-2xl" />
            )}
          </motion.button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-4 lg:hidden"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-2xl">
                <ul className="space-y-2">
                  {navLinks.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                          (
                            item.href === "/"
                              ? pathname === "/"
                              : pathname.startsWith(item.href)
                          )
                            ? "bg-white/10 text-white"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/10 pt-5">
                  {isPending ? (
                    <div className="h-12 w-32 animate-pulse rounded-full bg-white/10" />
                  ) : user ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={handleSignOut}
                      className="cursor-pointer rounded-full bg-red-500 px-6 py-3 font-semibold text-white w-full"
                    >
                      Logout
                    </motion.button>
                  ) : (
                    <Link href="/signup">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="cursor-pointer rounded-full bg-linear-to-r from-indigo-600 to-cyan-500 px-7 py-3 font-semibold text-white w-full"
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
