export const getAllScholarships = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship`,
  );
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
