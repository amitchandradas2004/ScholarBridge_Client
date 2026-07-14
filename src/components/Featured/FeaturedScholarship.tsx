import ScholarshipCard from "@/components/Scholarship/ScholarshipCard";
import { getAllScholarships } from "@/lib/api/scholarship";

const FeaturedScholarship = async () => {
  const allScholarships = await getAllScholarships();

  const featuredScholarships = allScholarships
    .filter((scholarship) => scholarship.fundingType === "Fully Funded")
    .slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto container px-5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-400">
            Featured Opportunities
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Featured{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Fully Funded
            </span>{" "}
            Scholarships
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Discover world-class scholarships that cover tuition fees, living
            expenses, travel costs, and more.
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedScholarship;
