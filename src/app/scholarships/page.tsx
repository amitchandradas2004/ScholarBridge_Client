import NoScholarship from "@/components/Scholarship/NoScholarship";
import ScholarshipCard from "@/components/Scholarship/ScholarshipCard";
import { getAllScholarships } from "@/lib/api/scholarship";

const ScholarShipsPage = async () => {
  const allScholarships = await getAllScholarships();

  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        {allScholarships.length === 0 ? (
          <NoScholarship />
        ) : (
          <>
            {/* Heading */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-white">
                Explore Scholarships{" "}
                <span className="text-indigo-400">
                  ({allScholarships.length})
                </span>
              </h1>

              <p className="mt-3 text-slate-400">
                Discover scholarships from universities around the world.
              </p>
            </div>

            {/* Scholarship Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allScholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship._id}
                  scholarship={scholarship}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ScholarShipsPage;
