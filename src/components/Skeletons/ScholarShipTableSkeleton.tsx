const rows = Array.from({ length: 10 });

const ScholarShipTableSkeleton = () => {
  return (
    <section className="py-25 animate-pulse bg-slate-950 px-2 md:px-0">
      <div className="overflow-hidden container mx-auto rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            {/* Header */}
            <thead className="bg-slate-950">
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

            {/* Skeleton Body */}
            <tbody>
              {rows.map((_, index) => (
                <tr key={index} className="border-b border-slate-800">
                  {/* Number */}
                  <td className="px-6 py-6">
                    <div className="mx-auto h-5 w-6 rounded bg-slate-700" />
                  </td>

                  {/* Scholarship */}
                  <td className="px-6 py-6">
                    <div className="space-y-3">
                      <div className="h-5 w-52 rounded bg-slate-700" />
                      <div className="h-4 w-36 rounded bg-slate-800" />
                    </div>
                  </td>

                  {/* Country */}
                  <td className="px-6 py-6">
                    <div className="mx-auto h-5 w-24 rounded bg-slate-700" />
                  </td>

                  {/* Deadline */}
                  <td className="px-6 py-6">
                    <div className="mx-auto h-9 w-36 rounded-full bg-slate-700" />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-6">
                    <div className="flex justify-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-700" />
                      <div className="h-10 w-10 rounded-xl bg-slate-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950 px-6 py-5">
          <div className="h-5 w-44 rounded bg-slate-700" />

          <div className="h-10 w-40 rounded-full bg-slate-700" />
        </div>
      </div>
    </section>
  );
};

export default ScholarShipTableSkeleton;
