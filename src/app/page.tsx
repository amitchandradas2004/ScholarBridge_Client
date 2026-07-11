import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/Homepage/FAQ";
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
      <FAQ />
    </div>
  );
}
