import Banner from "@/components/Banner/Banner";
import PopularCountries from "@/components/Homepage/PopularCountries";
import Statistics from "@/components/Homepage/Statistics";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCountries />
      <Statistics />
    </div>
  );
}
