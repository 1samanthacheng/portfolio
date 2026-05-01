import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Header />
      <Hero />
      <WorkSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
