import NoScholarship from "@/components/Scholarship/NoScholarship";
import ScholarshipCard from "@/components/Scholarship/ScholarshipCard";
import { getAllScholarships } from "@/lib/api/scholarship";
import { Pagination, Table } from "@heroui/react";
import Link from "next/link";
import DegreeFilter from "./DegreeFilter";
import FundingFilter from "./FundingFilter";
import SearchNotFound from "./SearchNotFound";
import SearchScholarship from "./SearchScholarship";
import SortScholarship from "./SortScholarship";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    degreeLevel?: string;
    fundingType?: string;
    sort?: string;
  }>;
}

const ScholarShipsPage = async ({ searchParams }: PageProps) => {
  const {
    page = "1",
    search = "",
    degreeLevel = "",
    fundingType = "",
    sort = "",
  } = await searchParams;

  const {
    data: allScholarships,
    currentPage,
    totalPages,
  } = await getAllScholarships(
    Number(page),
    search,
    degreeLevel,
    fundingType,
    sort,
  );

  const visiblePages = 4;

  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));

  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(1, endPage - visiblePages + 1);
    endPage = Math.min(totalPages, startPage + visiblePages - 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  const createQueryString = (pageNumber: number) => {
    const params = new URLSearchParams();

    params.set("page", pageNumber.toString());

    if (search) params.set("search", search);

    if (degreeLevel) params.set("degreeLevel", degreeLevel);

    if (fundingType) params.set("fundingType", fundingType);
    if (sort) {
      params.set("sort", sort);
    }
    return params.toString();
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="mx-auto container px-4">
        {/* Search */}
        <SearchScholarship />

        {/* Filters */}
        <div className="my-8 flex flex-col gap-5 md:flex-row md:justify-between">
          <DegreeFilter />
          <FundingFilter />

          <SortScholarship />
        </div>

        {allScholarships.length === 0 ? (
          search || degreeLevel || fundingType ? (
            <SearchNotFound search={search} />
          ) : (
            <NoScholarship />
          )
        ) : (
          <>
            {/* Heading */}
            <div className="mb-10">
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

            {/* Cards */}
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
                  <Pagination.Item>
                    <Link
                      href={`/scholarships?${createQueryString(
                        Math.max(1, currentPage - 1),
                      )}`}
                    >
                      <Pagination.Previous isDisabled={currentPage === 1}>
                        <Pagination.PreviousIcon />
                        Prev
                      </Pagination.Previous>
                    </Link>
                  </Pagination.Item>

                  {pages.map((p) => (
                    <Pagination.Item key={p}>
                      <Link href={`/scholarships?${createQueryString(p)}`}>
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

                  <Pagination.Item>
                    <Link
                      href={`/scholarships?${createQueryString(
                        Math.min(totalPages, currentPage + 1),
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
