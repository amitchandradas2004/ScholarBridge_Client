import NoScholarship from "@/components/Scholarship/NoScholarship";
import ScholarshipCard from "@/components/Scholarship/ScholarshipCard";
import { getAllScholarships } from "@/lib/api/scholarship";

const ScholarShipsPage = async () => {
  const allScholarships = await getAllScholarships();

  return (
    <main className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Empty State */}
        {allScholarships.length === 0 ? (
          <NoScholarship />
        ) : (
          <>
            {/* Heading */}
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-white">
                Explore Scholarships :{allScholarships.length}
              </h1>

              <p className="mt-3 text-slate-400">
                Discover scholarships from universities around the world.
              </p>
            </div>
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
