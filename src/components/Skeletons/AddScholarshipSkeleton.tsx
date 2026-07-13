export const AddScholarshipSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-5">
      <div className="relative mt-20 flex justify-center px-4">
        <div className="w-full max-w-xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto h-7 w-28 animate-pulse rounded-full bg-slate-800" />
            <div className="mx-auto mt-5 h-10 w-72 animate-pulse rounded-lg bg-slate-800" />
            <div className="mx-auto mt-4 h-4 w-96 animate-pulse rounded bg-slate-800" />
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="space-y-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index}>
                  <div className="mb-2 h-4 w-32 animate-pulse rounded bg-slate-800" />
                  <div className="h-11 w-full animate-pulse rounded-xl bg-slate-800" />
                </div>
              ))}

              <div>
                <div className="mb-2 h-4 w-32 animate-pulse rounded bg-slate-800" />
                <div className="h-32 w-full animate-pulse rounded-xl bg-slate-800" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <div className="h-11 w-28 animate-pulse rounded-xl bg-slate-800" />
                <div className="h-11 w-40 animate-pulse rounded-xl bg-indigo-700/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
