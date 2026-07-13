export const getAllScholarships = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/scholarship`,
  );
  return res.json();
};
