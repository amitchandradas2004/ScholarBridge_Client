import Banner from "@/components/Banner/Banner";
import PopularCountries from "@/components/Homepage/PopularCountries";
import Statistics from "@/components/Homepage/Statistics";
import SuccessStories from "@/components/Homepage/SuccessStories";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCountries />
      <Statistics />
      <SuccessStories />
    </div>
  );
}
