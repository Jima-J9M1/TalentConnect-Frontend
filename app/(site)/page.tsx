import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import HiringProcess from "@/components/Hiring-Process";
import ReasonCards from "@/components/Reason";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hire Top Tech Talent |Developers - Talent Connect',
    description:
        'Transform your projects with skilled software engineers handpicked from Addis Ababa Science and Technology University.',
    keywords: [
        'tech talent',
        'developers',
        'software development',
        'IT outsourcing',
        'diversity in tech']
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Brands /> */}
      <Feature />
      {/* What we Provide */}
      <FeaturesTab />
      <HiringProcess />
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <ReasonCards />
      <CTA />
      <FAQ />
      {/* <Testimonial /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
