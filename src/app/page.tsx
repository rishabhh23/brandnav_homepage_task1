import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import CTA from "./components/CTA";
import Tools from "./components/Tools";
import SocialProof from "./components/SocialProof";
import DarkBanner from "./components/DarkBanner";
import WhyUseHeading from "./components/WhyUseHeading";
import WhyUseArea from "./components/WhyUseArea";
import PinpointHeading from "./components/PinpointHeading";
import PinpointArea from "./components/PinpointArea";
import DataAccuracyHeading from "./components/DataAccuracyHeading";
import DataAccuracyArea from "./components/DataAccuracyArea";
import UsingBrandNavHeading from "./components/UsingBrandNavHeading";
import UsingBrandNavArea from "./components/UsingBrandNavArea";

export default function Home() {
  return (
    <div className="bg-[#F2F2FA] text-[#2F327D]">
      <div className="min-h-screen bg-gradient-to-b from-[#F7FAFFCC] to-[#F2F2FA]">
        <Navbar />
        <HeroText />
        <CTA />
        <Tools />
        <SocialProof />
      </div>
      <div>
        <DarkBanner />
      </div>
      <div>
        <WhyUseHeading />
        <WhyUseArea />
      </div>
      <div>
        <PinpointHeading />
        <PinpointArea />
      </div>
      <div>
        <DataAccuracyHeading />
        <DataAccuracyArea />
      </div>
      <div>
        <UsingBrandNavHeading />
        <UsingBrandNavArea />
      </div>
    </div>
  );
}
