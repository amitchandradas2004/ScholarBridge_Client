import ScholarshipCardSkeleton from "@/components/Skeletons/ScholarshipCardSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-28">
      <div className="container mx-auto px-4">
        {/* Heading Skeleton */}
        <div className="mb-12 text-center">
          <div className="mx-auto h-10 w-72 animate-pulse rounded-xl bg-slate-800" />
          <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded-lg bg-slate-800" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ScholarshipCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
