import About from "@/components/About";
import AboutUs from "@/components/About/AboutUs";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main className="px-[24px] bg-[#F9FAFB] dark:bg-[#181C31]">
      {/* <Breadcrumb pageName="About Us Page" /> */}
      <AboutUs />
      <Team />
    </main>
  );
};

export default AboutPage;
