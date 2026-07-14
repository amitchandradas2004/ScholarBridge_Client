import NoScholarship from "@/components/Scholarship/NoScholarship";
import { getMyScholarships } from "@/lib/api/scholarship";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ScholarShipTable from "./ScholarShipTable";

const MyScholarShipPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.email) {
    return <NoScholarship />;
  }

  const myScholarships = await getMyScholarships(session?.user?.email);

  if (myScholarships.length === 0) {
    return <NoScholarship />;
  }

  return <ScholarShipTable scholarShips={myScholarships} />;
};

export default MyScholarShipPage;
