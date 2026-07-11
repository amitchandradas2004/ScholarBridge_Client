"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Logo from "@/Assets/logo.png";

export default function Navbar() {
  const user = false;
  const [open, setOpen] = useState(false);

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
      <div className="container mx-auto pt-2 px-2 md:px-0">
        <nav className="flex h-15 items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-6 shadow-xl backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:scale-105"
          >
            <Image
              src={Logo}
              alt="ScholarBridge"
              width={45}
              height={45}
              priority
            />

            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              Scholar
              <span className="text-indigo-600">Bridge</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="rounded-xl px-4 py-2 font-medium text-slate-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Button */}
          <div className="hidden lg:flex">
            {user ? (
              <button className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">
                Logout
              </button>
            ) : (
              <Link href="/signup">
                <button className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700">
                  Get Started
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl bg-indigo-50 p-2 text-indigo-600 lg:hidden"
          >
            {open ? (
              <HiXMark className="text-2xl" />
            ) : (
              <HiBars3 className="text-2xl" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "mt-3 max-h-96" : "max-h-0"
          } lg:hidden`}
        >
          <div className="rounded-2xl border border-white/50 bg-white/80 p-4 shadow-xl backdrop-blur-xl">
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              {user ? (
                <button className="w-full rounded-full bg-red-500 py-3 font-semibold text-white">
                  Logout
                </button>
              ) : (
                <Link href="/signup">
                  <button className="w-full rounded-full bg-indigo-600 py-3 font-semibold text-white">
                    Get Started
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
