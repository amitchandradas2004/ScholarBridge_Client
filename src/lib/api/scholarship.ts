import { ScholarshipResponse } from "@/types/scholarship";
// export const getAllScholarships = async (
//   page: number = 1,
// ): Promise<ScholarshipResponse> => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship?page=${page}`,
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch scholarships");
//   }

//   return res.json();
// };
export const getAllScholarships = async (
  page: number = 1,
  search: string = "",
): Promise<ScholarshipResponse> => {
  const params = new URLSearchParams();

  params.set("page", page.toString());

  if (search.trim()) {
    params.set("search", search.trim());
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return res.json();
};
export const getScholarshipDetails = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch scholarship");
  }

  return res.json();
};

export const getMyScholarships = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship/user/${email}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return res.json();
};
