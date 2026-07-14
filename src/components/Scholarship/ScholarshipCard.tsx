"use client";

import { ScholarshipData } from "@/types/scholarship";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Globe,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ScholarshipCardProps {
  scholarship: ScholarshipData & {
    _id: string;
  };
}

export default function ScholarshipCard({ scholarship }: ScholarshipCardProps  ) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all hover:border-indigo-500/40"
    >
      {/* Banner */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={scholarship.bannerImage}
          alt={scholarship.scholarshipName}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {scholarship.fundingType}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h2 className="line-clamp-2 text-xl font-bold text-white transition group-hover:text-indigo-400">
            {scholarship.scholarshipName}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-slate-400">
            <Building2 size={16} />
            <span className="text-sm">{scholarship.universityName}</span>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <Globe size={16} className="text-cyan-400" />
            <span>{scholarship.countryName}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <GraduationCap size={16} className="text-indigo-400" />
            <span>{scholarship.degreeLevel}</span>
          </div>

          <div className="col-span-2 flex items-center gap-2 text-slate-300">
            <CalendarClock size={16} className="text-amber-400" />
            <span>Deadline: {scholarship.deadline}</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/scholarships/${scholarship._id}`}>
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-indigo-600/30"
          >
            View Details
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </motion.div>
        </Link>
      </div>
    </motion.article>
  );
}
