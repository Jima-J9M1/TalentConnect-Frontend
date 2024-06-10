import About from "@/components/About";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main className="px-[24px]">
      {/* <Breadcrumb pageName="About Us Page" /> */}
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
