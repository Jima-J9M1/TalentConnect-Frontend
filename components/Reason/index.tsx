"use client";

import ReasonCard from "./ReasonCard";
import ReasonCards from "./ReasonCard";


/*
Why Hire From Us? - 5
Vetted and Skilled Talents: Graduates meticulously assessed to ensure top-tier technical skills and project experience.
Tailored Matches to Your Needs: Personalized candidate selection based on project specifications and preferences.
Dedicated Support Throughout the Process: From initial consultations to onboarding, our team provides seamless support at every stage of the hiring journey.

*/
const Reason = () => {

  const reasoncardData = [
    {
     title:"Vetted and Skilled Talents",
     desc:"Graduates meticulously assessed to ensure top-tier technical skills and project experience."
  },
  {
    title:"Tailored Matches to Your Needs",
    desc:"Personalized candidate selection based on project specifications and preferences."
 },
 {
  title:"Dedicated Support Throughout the Process",
  desc:"From initial consultations to onboarding, our team provides seamless support at every stage of the hiring journey."
}

]
  return (
    <>
      {/* <!-- ===== reasonCards Table Start ===== --> */}
      

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col gap-24 sm:py-19 py-4">
      <p className="text-center text-3xl text-black font-semibold py-3 dark:text-white ">Why Hire From <span className="text-[#006BFF]">Talent Connect</span>?</p>
      <div className="flex justify-center gap-6 sm:flex-row flex-col">
         {reasoncardData.map((card, index)=><ReasonCard title={card.title} desc={card.desc} key={index}/>)}
      </div>
      </div>


    </>
  );
};

export default Reason;
