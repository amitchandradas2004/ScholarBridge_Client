import ScholarshipDetails from "@/components/Scholarship/ScholarshipDetails";
import { getScholarshipDetails } from "@/lib/api/scholarship";

const ScholarShipDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const scholarship = await getScholarshipDetails(id);

  return (
    <main className="bg-slate-950 py-12">
      <ScholarshipDetails scholarship={scholarship} />
    </main>
  );
};

export default ScholarShipDetailsPage;
