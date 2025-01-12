import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import CTA from "./components/CTA";
import Tools from "./components/Tools";
import SocialProof from "./components/SocialProof";
import DarkBanner from "./components/DarkBanner";
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
    </div>
  );
}
