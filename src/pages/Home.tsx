import Hero from "@/components/home/Hero";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import TreatmentPreview from "@/components/home/TreatmentPreview";
import Results from "@/components/home/Results";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import AIConsultant from "@/components/home/AIConsultant";
import ClinicExperience from "@/components/home/ClinicExperience";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        
        <ScrollReveal delay={0.1}>
          <WhyChooseMe />
        </ScrollReveal>

        <ScrollReveal>
          <TreatmentPreview />
        </ScrollReveal>

        <ClinicExperience />
        
        <Results />
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <AIConsultant />
        </ScrollReveal>

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
