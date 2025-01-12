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

export default function Home() {
  return (
    <div>
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
      <div className="bg-[#F2F2FA]">
        <WhyUseHeading />
        <WhyUseArea />
      </div>
      <div className="bg-[#F2F2FA] text-[#2F327D]">
        <PinpointHeading />
        <PinpointArea />
      </div>
    </div>
  );
}
