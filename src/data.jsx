import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaReact,
  FaPhp,
  FaCss3,
  FaBootstrap,
  FaGitSquare,
} from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { DiScrum } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { TbFileTypeHtml } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/DashboardScreen.png";
import Work2 from "./assets/LaBonneCuisine.png";
import Work3 from "./assets/todoslist.png";
import Work4 from "./assets/newApp.png";
import Work5 from "./assets/weatherApp-advanced.png";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "Sur&nbspMoi",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Prénom : ",
    description: "Yacine",
  },

  {
    id: 2,
    title: "Nom : ",
    description: "Taleb",
  },

  {
    id: 3,
    title: "Age : ",
    description: "29 ans",
  },

  {
    id: 4,
    title: "Freelance : ",
    description: "Disponible",
  },

  {
    id: 5,
    title: "Addresse : ",
    description: "Lyon , France",
  },

  {
    id: 6,
    title: "Téléphone : ",
    description: "+33750535347",
  },

  {
    id: 7,
    title: "Email : ",
    description: "yacinetaleb995@gmail.com",
  },

  {
    id: 8,
    title: "LinkedIn : ",
    description: "yacine taleb",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "Français, Anglais",
  },
  {
    id: 10,
    title: "Permis de Conduire : ",
    description: "B , A2",
  },
];

export const services = [
  {
    id: 1,
    description:
      "Je crée des interfaces utilisateur dynamiques et réactives en utilisant React.js. Mon expertise inclut la création de composants réutilisables, la gestion de l'état de l'application avec Redux, et l'intégration avec des API RESTful",
    title: "  Développement Front-End ",
  },

  {
    id: 2,
    description:
      " je crée et personnalise des sites web pour répondre à vos besoins spécifiques. Que vous ayez besoin d'un blog, d'un site vitrine, ou d'une boutique en ligne, je transforme vos idées en sites web attrayants et fonctionnels",
    title: "Développement et Personnalisation de Sites WordPress",
  },

  {
    id: 3,
    description:
      "Je propose des services de développement front-end où je transforme vos designs Figma en interfaces utilisateurs fonctionnelles et réactives",
    title: "Intégration Design-Dev avec Figma",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
    icon: (
      <TbFileTypeHtml className="skill__icon" style={{ color: "#ff7300" }} />
    ),
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
    icon: (
      <IoLogoJavascript className="skill__icon" style={{ color: "#FFD43B" }} />
    ),
  },
  {
    id: 3,
    title: "React",
    percentage: "80",
    icon: <FaReact className="skill__icon" style={{ color: "#74C0FC" }} />,
  },

  {
    id: 4,
    title: "Css",
    percentage: "90",
    icon: <FaCss3 className="skill__icon" style={{ color: "#086dd9" }} />,
  },
  {
    id: 5,
    title: "Bootstrap",
    percentage: "90",
    icon: <FaBootstrap className="skill__icon" style={{ color: "#4639f9" }} />,
  },
  {
    id: 6,
    title: "Php",
    percentage: "60",
    icon: <FaPhp className="skill__icon" style={{ color: "#5e46a4" }} />,
  },

  {
    id: 7,
    title: "Wordpress",
    percentage: "95",
    icon: <GrWordpress className="skill__icon" style={{ color: "black" }} />,
  },

  {
    id: 8,
    title: "Mysql",
    percentage: "80",
    icon: (
      <SiMysql
        className="skill__icon"
        style={{
          color: "black",
        }}
      />
    ),
  },

  {
    id: 9,
    title: "Api",
    percentage: "90",
    icon: <TbApi className="skill__icon" style={{ color: "#276fec" }} />,
  },

  {
    id: 10,
    title: "Github",
    percentage: "60",
    icon: <FaGitSquare className="skill__icon" style={{ color: "#f65000" }} />,
  },
  {
    id: 11,
    title: "Agile",
    percentage: "75",
    icon: <DiScrum className="skill__icon" style={{ color: "#0860f7" }} />,
  },

  {
    id: 11,
    title: "Stack overflow",
    percentage: "85",
    icon: (
      <ImStackoverflow className="skill__icon" style={{ color: "#ec7a3c" }} />
    ),
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Dashboard",
    details: [
      {
        icon: <FiFileText />,
        title: "Projet :  ",
        desc: "Tableau de Bord",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Voir le project",
        href: "https://dashboard-infohub.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Restaurent Menu",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : Restaurent Menu",
      },

      {
        icon: <FaCode />,
        title: "Language : HTML ,CSS ,JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Voir le project ",
        href: "https://labonnecuisine.netlify.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "TodosList",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : TodosList",
        desc: "",
      },

      {
        icon: <FaCode />,
        title: "Language : REACT JS ",
        desc: "",
      },
      {
        icon: <FiExternalLink />,
        title: "Voir le project ",
        href: "https://my-todos-list69.netlify.app/",
      },
    ],
  },
  {
    id: 4,
    img: Work4,
    title: "Application diffuseur d'articles de presse ",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "news york APP ",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "REACT JS , Boutstrap 5",
      },
      {
        icon: <FiExternalLink />,
        title: "lien sur github",
        href: "https://github.com/yacine-dotcom/news-app",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Application MéTéo",
    details: [
      {
        title: "Project : ",
        desc: "weatherAPP",
      },

      {
        title: "Language : ",
        desc: "React JS, CSS",
      },
      {
        title: "Lien sur Github ",
        href: "https://github.com/yacine-dotcom/weather-app-exercice",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "#8a2ce2", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "#8a2ce2", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
export const timeline = [
  {
    icon: workIcon,
    date: " juin 2019 ",
    title: "Diplome Licence Physique Fondamentale",
    subtitle: "Alger, AL",
    desc: "Université D'alger 1 - Faculté des sciences ",
  },
  {
    icon: workIcon,
    date: "2020 - 2021",
    title: "Licence 3 Physique Fondamentale",
    subtitle: "Clermont Ferrand, FR",
    desc: "Université D'auvergne - EUPI",
  },
  {
    icon: workIcon,
    date: "2021 - 2022",
    title: "Master 1 - Devloppement Web",
    subtitle: "Paris, FR",
    desc: "ESEM Paris",
  },
  {
    icon: workIcon,
    date: "2022 - 2023",
    title: "Master 2 - Conception et Integration Multémedia  ",
    subtitle: "Lyon, FR",
    desc: "Université Lumiére Lyon 2",
  },

  {
    icon: schoolIcon,
    date: "Mars 2023 - Aout 2024",
    title: "Développeur Web ",
    subtitle: "Stage fin d'etudes Master 2 CIM",
    desc: "Parene SAS",
  },
  {
    icon: schoolIcon,
    date: "present",
    title: "E-learning",
    subtitle: "Disponible en Freelance",
    desc: "Lyon , FR",
  },
  { icon: starIcon },
];
