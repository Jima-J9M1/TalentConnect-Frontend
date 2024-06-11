import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: any = [
  {
    id: 1,
    name: "Jima Dube",
    designation: "Web Developer",
    image: "/images/team/jima-2.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Mehari Tesfaye",
    designation: "App Developer",
    image: "/images/team/mehari.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Haymanot Demiss",
    designation: "Backend Developer",
    image: "/images/team/haymi.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Ibsa Abraham",
    designation: "Backend Developer",
    image: "/images/team/ibsa.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Matiyas Seifu",
    designation: "Mobile Developer",
    image: "/images/team/se-team-5.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="">
        <div className="mb-[60px]">
          <SectionTitle
            title="Meet Our Team"
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center ">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
