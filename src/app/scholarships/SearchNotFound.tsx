import Link from "next/link";
import { SearchX } from "lucide-react";

interface SearchNotFoundProps {
  search: string;
}

const SearchNotFound = ({
  search,
}: SearchNotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center">
      <div className="mb-6 rounded-full bg-slate-800 p-5">
        <SearchX className="h-12 w-12 text-indigo-400" />
      </div>

      <h2 className="text-3xl font-bold text-white">
        No Scholarships Found
      </h2>

      <p className="mt-4 max-w-lg text-slate-400">
        We could not find any scholarships matching{" "}
        <span className="font-semibold text-white">
         {search} 
        </span>
        .
      </p>

      <p className="mt-2 text-slate-500">
        Try searching with another scholarship name or clear the
        search to see all scholarships.
      </p>

      <Link
        href="/scholarships"
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        View All Scholarships
      </Link>
    </div>
  );
};

export default SearchNotFound;