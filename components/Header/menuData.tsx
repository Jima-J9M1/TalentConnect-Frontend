import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Our Talent Pool",
    newTab: false,
    submenu: [
      {
        id: 34,
        title: "Web Developers",
        newTab: false,
        path: "/#talentpool",
      },
      {
        id: 35,
        title: "Mobile Developers",
        newTab: false,
        path: "/#talentpool",
      },
      {
        id: 35,
        title: "Backend Developers",
        newTab: false,
        path: "/#talentpool",
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/#contact",
  },
  {
    id: 6,
    title: "Talent",
    newTab: false,
    path: "/talent",
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  
];

export default menuData;
