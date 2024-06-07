import Citation from "@/components/citation-section";
import HeroSection from "@/components/hero-section";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Meteors } from "@/components/ui/meteors";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="container">
      <Meteors number={20} />
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <Citation />
    </main>
  );
}
