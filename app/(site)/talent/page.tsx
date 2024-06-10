import AboutSectionOne from "@/components/Talent/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Talent/About/AboutSectionTwo";
import Blog from "@/components/Talent/Blog";
import Brands from "@/components/Talent/Brands";
import ScrollUp from "@/components/Talent/Common/ScrollUp";
import Contact from "@/components/Talent/Contact";
import Features from "@/components/Talent/Features";
import Hero from "@/components/Talent/Hero";
import Pricing from "@/components/Talent/Pricing";
import Testimonials from "@/components/Talent/Testimonials";
import Video from "@/components/Talent/Video";


export default function Home() {
  return (
    <div className="px-[32px]">
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </div>
  );
}
