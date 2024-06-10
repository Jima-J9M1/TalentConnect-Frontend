import Image from "next/image";
import Link from "next/link";

const   Hero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Connect with Top Software Engineering Talent
              </h1>
              <p>
              Transform your projects with skilled software engineers handpicked from Addis Ababa Science and Technology University.
              </p>

              <div className="mt-10">
                  <div className="flex justify-center sm:justify-start">
                    <Link
                      href={"https://talent-connect-developer-frontend.vercel.app/hire"}
                      aria-label="get started button"
                      className="flex rounded-full bg-[#197AFF] px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Hire Now

                    </Link>
                  </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0 z-50"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-50"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-50"
                />
                <div className="aspect-[700/444] w-full z-10">
                  <Image
                    className="shadow-solid-l dark:hidden object-cover z-1 bg-[#F9FAFD] bg-bottom-[#F5F7FB] bg-right-[#F6F7FB] bg-left-[#F5F7FB]"
                    src="/images/hero/hero-1.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block object-cover "
                    src="/images/hero/hero-1.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
