import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import ParallaxBanner from "@/components/ParallaxBanner";
import AssociatesSection from "@/components/AssociatesSection";
import ClientSectors from "@/components/ClientSectors";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <ParallaxBanner />
      <AssociatesSection />
      <ClientSectors />
      <ContactSection />
    </>
  );
}
