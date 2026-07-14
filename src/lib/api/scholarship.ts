import { Scholarship } from "@/types/scholarship";
export const getAllScholarships = async (): Promise<Scholarship[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship`,
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
