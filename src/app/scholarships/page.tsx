import NoScholarship from "@/components/Scholarship/NoScholarship";
import ScholarshipCard from "@/components/Scholarship/ScholarshipCard";
import { getAllScholarships } from "@/lib/api/scholarship";
import { Pagination, Table } from "@heroui/react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const ScholarShipsPage = async ({ searchParams }: PageProps) => {
  const { page = "1" } = await searchParams;

  const {
    data: allScholarships,
    currentPage,
    totalPages,
  } = await getAllScholarships(Number(page));

  const visiblePages = 4;

  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));

  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  // Adjust when we're near the end
  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(1, endPage - visiblePages + 1);
    endPage = Math.min(totalPages, startPage + visiblePages - 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <main className="  min-h-screen bg-slate-950 py-25">
      <div className="mx-auto max-w-7xl px-5">
        {allScholarships.length === 0 ? (
          <NoScholarship />
        ) : (
          <>
            {/* Heading */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-white">
                Explore Scholarships : {allScholarships.length}
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

            {/* Pagination */}
            <Table.Footer className="overflow-x-auto py-12">
              <Pagination size="sm" className="flex justify-center">
                <Pagination.Content>
                  {/* Previous */}
                  <Pagination.Item>
                    <Link
                      href={`/scholarships?page=${Math.max(
                        1,
                        currentPage - 1,
                      )}`}
                    >
                      <Pagination.Previous isDisabled={currentPage === 1}>
                        <Pagination.PreviousIcon />
                        Prev
                      </Pagination.Previous>
                    </Link>
                  </Pagination.Item>

                  {/* Page Numbers */}
                  {pages.map((p) => (
                    <Pagination.Item key={p}>
                      <Link href={`/scholarships?page=${p}`}>
                        <Pagination.Link
                          isActive={p === currentPage}
                          className={
                            p === currentPage
                              ? "h-9 w-9 bg-indigo-600 text-white"
                              : "h-9 w-9"
                          }
                        >
                          {p}
                        </Pagination.Link>
                      </Link>
                    </Pagination.Item>
                  ))}

                  {/* Next */}
                  <Pagination.Item>
                    <Link
                      href={`/scholarships?page=${Math.min(
                        totalPages,
                        currentPage + 1,
                      )}`}
                    >
                      <Pagination.Next isDisabled={currentPage === totalPages}>
                        Next
                        <Pagination.NextIcon />
                      </Pagination.Next>
                    </Link>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </Table.Footer>
          </>
        )}
      </div>
    </main>
  );
};

export default ScholarShipsPage;
