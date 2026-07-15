import ScholarshipCardSkeleton from "@/components/Skeletons/ScholarshipCardSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-28">
      <div className="container mx-auto px-4">
        {/* Heading Skeleton */}
        <div className="space-y-10 pb-5">
          {/* Search Section */}
          <div>
            {/* Label */}
            <div className="h-6 w-96 animate-pulse rounded-lg bg-slate-800" />

            {/* Search Input + Button */}
            <div className="mt-4 flex flex-col gap-5 md:flex-row">
              <div className="h-16 flex-1 animate-pulse rounded-2xl bg-slate-800" />

              <div className="h-16 w-full animate-pulse rounded-full bg-slate-800 md:w-48" />
            </div>
          </div>

          {/* Filters Section */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Degree Level */}
            <div className="space-y-3">
              <div className="h-6 w-36 animate-pulse rounded-lg bg-slate-800" />

              <div className="h-16 w-full animate-pulse rounded-2xl bg-slate-800" />

              <div className="h-5 w-64 animate-pulse rounded-lg bg-slate-800" />
            </div>

            {/* Funding Type */}
            <div className="space-y-3">
              <div className="h-6 w-40 animate-pulse rounded-lg bg-slate-800" />

              <div className="h-16 w-full animate-pulse rounded-2xl bg-slate-800" />

              <div className="h-5 w-72 animate-pulse rounded-lg bg-slate-800" />
            </div>

            {/* Sort */}
            <div className="space-y-3">
              <div className="h-6 w-32 animate-pulse rounded-lg bg-slate-800" />

              <div className="h-16 w-full animate-pulse rounded-2xl border border-slate-700 bg-slate-800" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <ScholarshipCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
