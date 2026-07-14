import { User } from "@/types/scholarship";

export const getSpecificUser = async (email: string): Promise<User> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${email}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
};
