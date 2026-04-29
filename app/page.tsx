import { ContactBar } from "@/components/contact-bar";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogosSection } from "@/components/logos-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactBar />
        <ServicesSection />
        <TeamSection />
        <LogosSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
