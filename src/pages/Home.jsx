import Footer from "../components/Footer";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeFeature from "../components/HomeFeatured";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeToAbout from "../components/HomeToAbout";
import { BreakPoints } from "../components/utils/BreakPoints";

function Home() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;

  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection lgScreen={lgScreen} />
      <HomeToAbout />
      <HomeFeature />
      <Footer />
    </>
  );
}

export default Home;
