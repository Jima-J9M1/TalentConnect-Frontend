import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";


/*
Why Are Developers From AASTU The Best? - 3

Subheadline: Nurturing Exceptional Software Engineers with Cutting-Edge Skills.

Solid Foundation: AASTU graduates have a strong foundation in software engineering principles.
Practical Skills: They possess practical skills honed through hands-on projects and industry collaborations.
Innovative Problem Solvers: AASTU fosters innovative thinking, producing developers who excel at solving complex problems.
Dedicated Work Ethic: AASTU instills a dedicated work ethic, ensuring graduates are committed to delivering high-quality results.


*/
const Features = () => {
  return (
    <section className="pb-8 sm:pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="container">
        <SectionTitle
          title="Why Are Developers From AASTU The Best?"
          paragraph="Nurturing Exceptional Software Engineers with Cutting-Edge Skills."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
