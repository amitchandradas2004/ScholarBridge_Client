import { getSpecificUser } from "@/lib/api/user";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ProfileCard from "./ProfileCard";
import NoUserFound from "./NoUserFound";
import { getMyScholarships } from "@/lib/api/scholarship";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;

  if (!session?.user) {
    return <NoUserFound />;
  }
  const user = await getSpecificUser(userEmail as string);
  const myScholarships = await getMyScholarships(userEmail as string);

  return (
    <>
      <ProfileCard user={user} myScholarships={myScholarships} />
    </>
  );
};

export default ProfilePage;
