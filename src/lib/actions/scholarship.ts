"use server";
import { ScholarshipData } from "@/types/scholarship";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/myScholarships");
  return res.json();
};

export const deleteScholarship = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete scholarship.");
  }

  revalidatePath("/myScholarships");

  return res.json();
};
