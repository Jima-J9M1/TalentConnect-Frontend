import { FeatureTab } from "@/types/featureTab";


/*
Our Talent Pool - 4
Backend Developers: Our backend developers are highly trained in building scalable server-side applications using technologies like Node.js, Express.js, and MongoDB.
Web Developers:  Skilled in crafting visually appealing and user-friendly web interfaces with expertise in HTML, CSS, JavaScript, and popular frameworks like React.js and Angular.
Mobile Developers: Experienced in developing cross-platform mobile applications using frameworks like Flutter and React Native, ensuring seamless performance across devices.

*/
const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Mobile Developers",
    desc1: `Experienced in developing cross-platform mobile applications using frameworks like Flutter and React Native, ensuring seamless performance across devices. `,
    image: "/images/features/mobile.png",
    imageDark: "/images/features/mobile.png",
  },
  {
    id: "tabTwo",
    title: "Web Developers",
    desc1: `Specializes in designing mobile apps that offer high performance and an exceptional user experience, guaranteeing seamless engagement across all devices.`,
    image: "/images/features/web.png",
    imageDark: "/images/features/web.png",
  },
  {
    id: "tabThree",
    title: "Backend Developers",
    desc1: ` Our backend developers are highly trained in building scalable server-side applications using technologies like Node.js, Express.js, and MongoDB.`,
    image: "/images/features/backend.png",
    imageDark: "/images/features/backend.png",
  },
];

export default featuresTabData;
