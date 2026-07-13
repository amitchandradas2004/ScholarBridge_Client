"use client";

import { ScholarshipData } from "@/types/scholarship";
import { CalendarDays, Eye, Globe, Trash2 } from "lucide-react";
import Link from "next/link";

interface ScholarShipTableProps {
  scholarShips: ScholarshipData[];
}

const ScholarShipTable = ({ scholarShips }: ScholarShipTableProps) => {
  return (
    <section className="py-25 bg-slate-950 px-2 md:px-0">
      <div className="overflow-hidden container mx-auto  border border-slate-800  shadow-2xl shadow-black/30 bg-slate-900 rounded-xl">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-225 border-collapse">
            {/* Header */}
            <thead className="sticky top-0 z-10 bg-slate-950">
              <tr className="border-b border-slate-800">
                <th className="w-20 px-6 py-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Number
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Scholarship
                </th>

                <th className="px-6 py-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Country
                </th>

                <th className="px-6 py-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Deadline
                </th>

                <th className="px-6 py-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {scholarShips.map((item, index) => (
                <tr
                  key={item._id}
                  className="group border-b border-slate-800 transition-all duration-300 hover:bg-slate-800/50"
                >
                  {/* Serial */}
                  <td className="px-6 py-6 text-center font-semibold text-slate-500">
                    {index + 1}
                  </td>

                  {/* Scholarship */}
                  <td className="px-6 py-6">
                    <div>
                      <h3 className="text-base font-semibold text-white transition-colors group-hover:text-indigo-400">
                        {item.scholarshipName}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {item.universityName}
                      </p>
                    </div>
                  </td>

                  {/* Country */}
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-2 text-slate-300">
                      <Globe
                        size={16}
                        className="text-indigo-400 flex-shrink-0"
                      />

                      <span>{item.countryName}</span>
                    </div>
                  </td>

                  {/* Deadline */}
                  <td className="px-6 py-6">
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
                        <CalendarDays size={15} />

                        {item.deadline}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-3">
                      <Link
                        href={`/scholarships/${item._id}`}
                        className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/20"
                      >
                        <Eye size={18} />
                      </Link>

                      <button className="cursor-pointer rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-red-400 transition-all duration-300 hover:scale-110 hover:border-red-400 hover:bg-red-500/20">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 bg-slate-950 px-6 py-5 md:flex-row">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-bold text-white">{scholarShips.length}</span>{" "}
            scholarship{scholarShips.length !== 1 && "s"}
          </p>

          <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
            My Scholarships
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarShipTable;
