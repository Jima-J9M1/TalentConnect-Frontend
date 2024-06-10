import FeatureSvg from '@/public/images/hiringprocess/features.svg';
import Image from 'next/image';



/*
Streamlined Hiring Process - 6
Consultation with Talent Specialists: Begin by discussing your project requirements and objectives with our dedicated talent specialists, who will guide you through the process and offer personalized recommendations.
Tailored Candidate Matching: Our platform uses algorithms to match you with a curated list of candidates who meet your specific criteria. You have the opportunity to review their profiles and conduct interviews to ensure a perfect fit for your team.
Seamless Onboarding and Collaboration: Once you've selected the ideal candidate, we facilitate a smooth transition and provide ongoing support to ensure a successful collaboration. From project kickoff to delivery, our team is here to help you every step of the way.

*/
const listItems = [
  {
    title: `Consultation with Talent Specialists`,
    description: `Begin by discussing your project requirements and objectives with our dedicated talent specialists, who will guide you through the process and offer personalized recommendations.`,
  },
  {
    title: `Tailored Candidate Matching`,
    description: ` Our platform uses algorithms to match you with a curated list of candidates who meet your specific criteria. You have the opportunity to review their profiles and conduct interviews to ensure a perfect fit for your team.`,
  },
  {
    title: `Seamless Onboarding and Collaboration`,
    description: `Once you've selected the ideal candidate, we facilitate a smooth transition and provide ongoing support to ensure a successful collaboration. From project kickoff to delivery, our team is here to help you every step of the way.`,
  },
];

const HiringProcess = () => (
  <section className="lg:py-28 sm:pt-28 overflow-hidden" id='hirefromtalent'>
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ">
      <div className="mb-16 sm:text-center text-start">
        <h2 className="text-base text-[#006BFF] font-semibold tracking-wide uppercase">Transform your business
        </h2>
        <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          Streamlined Hiring Process
        </p>
      </div>
      <div className="flex flex-wrap -mx-8 items-center">
        <div className="w-full lg:w-1/2 px-8">
          <ul className="space-y-12">
            {listItems.map((item, index) => (
              <li className="flex -mx-4" key={item.title}>
                <div className="px-4">
                  <span
                    className="flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-[#006BFF]"
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 leading-loose">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <div className="lg:mb-12 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
            <Image
            src={FeatureSvg}
            width={100}
            height={100}
            alt='feature image'
            className='w-full h-full'
            />
            {/* <FeatureSvg width="100%" height="100%" /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HiringProcess;
