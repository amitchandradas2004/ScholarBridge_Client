import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import FeaturedScholarship from "@/components/Featured/FeaturedScholarship";
import FAQ from "@/components/Homepage/FAQ";
import PopularCountries from "@/components/Homepage/PopularCountries";
import Statistics from "@/components/Homepage/Statistics";
import SuccessStories from "@/components/Homepage/SuccessStories";
import Support from "@/components/Support/Support";
import PrivacyPolicyPage from "@/components/Homepage/PrivacyPolicyPage";
export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedScholarship />
      <PopularCountries />
      <Statistics />
      <SuccessStories />
      <Contact />
      <Support />
      <PrivacyPolicyPage/>
      <FAQ />
    </div>
  );
}
