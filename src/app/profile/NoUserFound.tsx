"use client";

import { Button } from "@heroui/react";
import { UserX } from "lucide-react";
import Link from "next/link";

const NoUserFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <UserX className="h-10 w-10 text-red-400" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-white">User Not Found</h1>

        {/* Description */}
        <p className="mt-3 text-slate-400">
          We could not find your account information. Please sign in again or
          return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            {" "}
            <Button className="font-semibold">Go Home</Button>
          </Link>

          <Link href="/login">
            <Button className="border-slate-700 text-white">Sign In</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoUserFound;
