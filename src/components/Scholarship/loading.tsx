const ScholarshipDetailsSkeleton = () => {
  return (
    <section className="bg-slate-950 py-25">
      <div className="overflow-hidden rounded-3xl mx-auto container px-5 border border-slate-800 bg-slate-900 shadow-2xl ">
        <div className="relative h-62.5 w-full animate-pulse bg-slate-800 md:h-100" />

        <div className="space-y-10 p-8 md:p-12">
          <div className="space-y-3">
            <div className="h-9 w-3/4 animate-pulse rounded-lg bg-slate-800 md:h-10 md:w-1/2" />
            <div className="h-6 w-1/3 animate-pulse rounded-lg bg-slate-800" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <InfoCardSkeleton key={index} />
            ))}
          </div>

          <div className="space-y-4">
            <div className="h-7 w-56 animate-pulse rounded-lg bg-slate-800" />

            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-slate-800" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="h-14 w-40 animate-pulse rounded-xl bg-slate-800" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipDetailsSkeleton;

const InfoCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-5 w-5 animate-pulse rounded bg-slate-800" />
        <div className="h-4 w-20 animate-pulse rounded bg-slate-800" />
      </div>

      <div className="h-5 w-2/3 animate-pulse rounded bg-slate-800" />
    </div>
  );
};
