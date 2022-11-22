import pizza_lair from "../assets/Project_Images/Pizza_Lair.png";
import diet_hard from "../assets/Project_Images/Diet_Hard.png";

export const Works = [
  {
    id: 1,
    name: "Pizza Lair, A mock of pizza store app",
    features:
      "It has user verification and forgot password via email, admin portal for stock management and order approval, low stock email notification and much more.... ",
    tags: ["react", "mongodb", "express js"],
    date: "05 Oct, 2022",
    imgSrc: `${pizza_lair}`,
    link: "https://viki-pizza-delivery-app.netlify.app",
  },
  {
    id: 2,
    name: "Diet Hard, A mock of diet and fitness tracking app",
    features:
      "It has user verification and metrics tracking features along with a decent UI/UX while following the MVC pattern for backend... ",
    tags: ["react", "mongodb", "express js"],
    date: "22 Nov, 2022",
    imgSrc: `${diet_hard}`,
    link: "https://diet-hard-app.netlify.app/",
  },
];
