import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceEducation />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
