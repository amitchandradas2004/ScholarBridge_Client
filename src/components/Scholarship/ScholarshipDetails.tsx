"use client";

import { Scholarship } from "@/types/scholarship";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  DollarSign,
  ExternalLink,
  Globe,
  GraduationCap,
  X,
} from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ScholarshipDetailsProps {
  scholarship: Scholarship;
}

const ScholarshipDetails = ({ scholarship }: ScholarshipDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoClick = () => {
    window.open(scholarship.officialLink, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  return (
    <section className="mx-auto container py-15 px-2 md:px-5">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="relative h-62.5 w-full md:h-100">
          <Image
            src={scholarship.bannerImage}
            alt={scholarship.scholarshipName}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-10 p-8 md:p-12">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {scholarship.scholarshipName}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-lg text-slate-400">
              <Building2 size={18} />
              {scholarship.universityName}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<Globe size={20} />}
              title="Country"
              value={scholarship.countryName}
            />

            <InfoCard
              icon={<GraduationCap size={20} />}
              title="Degree Level"
              value={scholarship.degreeLevel}
            />

            <InfoCard
              icon={<BadgeCheck size={20} />}
              title="Funding Type"
              value={scholarship.fundingType}
            />

            <InfoCard
              icon={<DollarSign size={20} />}
              title="Scholarship Amount"
              value={`$${scholarship.amount}`}
            />

            <InfoCard
              icon={<CalendarDays size={20} />}
              title="Deadline"
              value={new Date(scholarship.deadline).toLocaleDateString()}
            />
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Scholarship Description
            </h2>

            <p className="leading-8 text-slate-300">
              {scholarship.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Apply Now
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ===================== Apply Confirmation Modal ===================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-slate-400 transition hover:text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-semibold text-white">
                Leaving ScholarBridge
              </h3>

              <p className="mt-3 text-slate-300">
                You&apos;re about to visit the official application page for{" "}
                <span className="font-medium text-white">
                  {scholarship.scholarshipName}
                </span>
                . Make sure to review all requirements before applying.
              </p>

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-700 px-5 py-2.5 font-medium text-slate-300 transition hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  onClick={handleGoClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Go
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScholarshipDetails;

interface InfoCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const InfoCard = ({ title, value, icon }: InfoCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="mb-3 flex items-center gap-2 text-emerald-400">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>

      <p className="text-lg text-slate-200">{value}</p>
    </div>
  );
};
