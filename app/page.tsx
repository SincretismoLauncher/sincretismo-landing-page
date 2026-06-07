import { CtaFinal } from "@/components/sections/CtaFinal";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LauncherPreview } from "@/components/sections/LauncherPreview";
import { Navbar } from "@/components/sections/Navbar";
import { Requirements } from "@/components/sections/Requirements";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LauncherPreview />
        <Requirements />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
