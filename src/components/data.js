import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import videoDownloader from "../assets/portfolio/Video downloader.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

export const navbarlinks = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

export const Socialinks = [
  {
    id: 1,
    child: (
      <>
        Linkedin
        <AiFillLinkedin size={30} />
      </>
    ),
    href: "https://linkedin.com",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub
        <AiFillGithub size={30} />
      </>
    ),
    href: "https://github.com",
  },
  {
    id: 3,
    child: (
      <>
        GMail
        <AiOutlineMail size={30} />
      </>
    ),
    href: "mailto: foo@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Profile
        <BsPersonLinesFill size={30} />
      </>
    ),
    href: "",
    style: "rounded-br-md",
    download: true,
  },
];

export const portfolios = [
  {
    id: 1,
    src: videoDownloader,
    code: "https://github.com/krunal-chaudhari-developer/Video_Downloader_Frontend",
    demo: "https://inlifa.netlify.app/",
  },
];

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "ReactJS",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: github,
    title: "GitHub",
    style: "shadow-gray-500",
  },
];
