import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="mt-14 flex items-center justify-center gap-2">
      <Link
        href={`/scholarships?page=${currentPage - 1}`}
        className={`rounded-lg border px-4 py-2 transition ${
          currentPage === 1
            ? "pointer-events-none border-slate-800 text-slate-600"
            : "border-slate-700 text-white hover:bg-slate-800"
        }`}
      >
        Previous
      </Link>

      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i}
          href={`/scholarships?page=${i + 1}`}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
            currentPage === i + 1
              ? "bg-indigo-600 text-white"
              : "border border-slate-700 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {i + 1}
        </Link>
      ))}

      <Link
        href={`/scholarships?page=${currentPage + 1}`}
        className={`rounded-lg border px-4 py-2 transition ${
          currentPage === totalPages
            ? "pointer-events-none border-slate-800 text-slate-600"
            : "border-slate-700 text-white hover:bg-slate-800"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;