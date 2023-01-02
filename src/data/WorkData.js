import pizza_lair from "../assets/Project_Images/Pizza_Lair.png";
import pizza_lair_mobile from "../assets/Project_Images/Pizza_Lair_mobile.png";
import diet_hard from "../assets/Project_Images/Diet_Hard.png";
import diet_hard_mobile from "../assets/Project_Images/Diet_Hard_mobile.png";
import fairy_palace from "../assets/Project_Images/Fairy_palace.png";
import fairy_palace_mobile from "../assets/Project_Images/Fairy_palace_mobile.png";
import crowds from "../assets/Project_Images/Crowds.png";
import crowds_mobile from "../assets/Project_Images/Crowds_mobile.png";

export const Works = [
  {
    id: 1,
    name: "Pizza Lair, A mock of pizza vendor app",
    features:
      "created with user verification and forgot password via email, admin portal for stock management and order approval, low stock email notification and much more.... ",
    tags: ["react", "mongodb", "express js"],
    date: "05 Oct, 2022",
    imgSrc: `${pizza_lair}`,
    link: "https://viki-pizza-delivery-app.netlify.app",
    mobile: `${pizza_lair_mobile}`,
  },
  {
    id: 2,
    name: "Crowds, A mock of social media and chat app",
    features:
      "created with MySQL  and web sockets for real time chat feature with SQL database hosted in AWS RDS ",
    tags: ["react", "MySQL", "AWS RDS"],
    date: "28 Dec, 2022",
    imgSrc: `${crowds}`,
    link: "https://crowds-community.netlify.app/",
    mobile: `${crowds_mobile}`,
  },
  {
    id: 3,
    name: "Diet Hard, A mock of diet and fitness tracking app",
    features:
      "created with verification and metrics tracking features along with a decent UI/UX while following the MVC pattern for backend... ",
    tags: ["react", "mongodb", "express js"],
    date: "22 Nov, 2022",
    imgSrc: `${diet_hard}`,
    link: "https://diet-hard-app.netlify.app/",
    mobile: `${diet_hard_mobile}`,
  },
  {
    id: 4,
    name: "Fairy Palace, A mock of Clothing app",
    features:
      "created with Google account integration using Firebase and pleasing data visaulization with charts and redux",
    tags: ["react", "firebase", "redux"],
    date: "10 Dec, 2022",
    imgSrc: `${fairy_palace}`,
    link: "https://fairy-palace.netlify.app/",
    mobile: `${fairy_palace_mobile}`,
  },
];
