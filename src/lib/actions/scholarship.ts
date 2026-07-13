import { ScholarshipData } from "@/types/scholarship";

export const postScholarShip = async (scholarshipData: ScholarshipData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scholarshipData),
    },
  );
  return res.json();
};
