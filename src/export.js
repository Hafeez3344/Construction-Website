import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Transforming spaces with quality craftsmanship, modern design, and innovative solutions for a fresh, functional look.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      " Providing top-quality construction solutions from design to completion with a focus on efficiency, precision, and excellence.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Tailored solutions that bring your vision to life with precision, creativity, and attention to detail throughout the process.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Providing thorough and organized records to streamline processes and ensure project transparency.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Creating stylish and functional spaces that reflect your unique taste and lifestyle.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Dedicated to assisting you with expert guidance and timely responses for a seamless experience.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We assess your needs, define project goals, and create a comprehensive strategy for success.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      " Our team creates innovative layouts and concepts that align with your vision and requirements.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "We execute construction with precision, ensuring quality workmanship at every stage of the project.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We apply the final touches, ensuring every detail meets our high standards and your expectations.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Prime Construction exceeded my expectations! Their attention to detail and commitment to quality made my renovation project seamless and enjoyable.",
      post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Working with Prime Construction was a fantastic experience. They brought my vision to life with professionalism and skill, making the entire process smooth and stress-free.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Prime Construction transformed my space beautifully. Their expertise and dedication to quality made all the difference. I highly recommend them for any construction needs!",
    post: "Builder",
  },
];
