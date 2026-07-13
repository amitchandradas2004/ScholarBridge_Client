const ScholarshipCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      {/* Image */}
      <div className="h-56 w-full animate-pulse bg-slate-800" />

      <div className="space-y-4 p-6">
        {/* University */}
        <div className="h-4 w-32 animate-pulse rounded bg-slate-800" />

        {/* Title */}
        <div className="h-7 w-3/4 animate-pulse rounded bg-slate-800" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-slate-800" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-8 w-24 animate-pulse rounded-full bg-slate-800" />
          <div className="h-8 w-28 animate-pulse rounded-full bg-slate-800" />
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="h-6 w-28 animate-pulse rounded bg-slate-800" />
          <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCardSkeleton;
