import { flushSync } from "react-dom";
import {
  bags_1,
  tshirt,
  boots,
  jeans_1,
  jeans_2,
  bags_2,
  eyewear_1,
  jeans_4,
  Women_1,
} from "../assets";

export const productData = [
  {
    id: "bags_1",
    img: bags_1,
    sale: true,
    salePercentage: "4",
    arrival: true,
    title: "Pale Grey Tate Bag",
    price: "12999",
    category: ["bags", "women"],
  },
  {
    id: "tshirt",
    img: tshirt,
    sale: false,
    salePercentage: false,
    arrival: true,
    title: "Dark Red Plain Short Sleeve T-Shirt",
    price: "3999",
    category: ["men", "tshirt"],
  },
  {
    id: "boots",
    img: boots,
    sale: true,
    salePercentage: false,
    arrival: true,
    title: "Black Lace Up Boots",
    price: "15999",
    category: ["women", "shoe"],
  },
  {
    id: "women_1",
    img: Women_1,
    sale: true,
    salePercentage: "15",
    arrival: true,
    title: "Pocket Single Breasted Shirt Dress",
    price: "19999",
    category: ["women", "clothes"],
  },
  {
    id: "bags_2",
    img: bags_2,
    sale: true,
    salePercentage: false,
    arrival: true,
    title: "Wizard School Inspired Handbag",
    price: "7999",
    category: ["women", "bags"],
  },
  {
    id: "jeans_4",
    img: jeans_4,
    sale: true,
    salePercentage: "10",
    arrival: true,
    title: "Vintage CHIC Jeans",
    price: "9999",
    category: ["women", "jeans"],
  },
];

export const Servicesdata = [
  {
    id: 1,
    logo: "fa-solid fa-truck",
    title: "Complimentary Shipping",
    description: "Enjoy free shipping on orders over ₹999",
  },
  {
    id: 2,
    logo: "fa-solid fa-globe",
    title: "Consciously Crafted",
    description: "Designed with you and the planet in mind.",
  },
  {
    id: 3,
    logo: "fa-solid fa-arrow-right-arrow-left",
    title: "Hassle Free Returns",
    description: " Experience a stress-free process with us.",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Terms & Conditions",
        link: "https://www.mixit.com/terms-condition/",
      },
      {
        name: "Returns & Exchanges",
        link: "https://www.mixit.com/return-exchange/",
      },
      {
        name: "Shopping & Delivery",
        link: "https://www.mixit.com/shopping-delivery/",
      },
      {
        name: "Privicy Policy",
        link: "https://www.mixit.com/privicy-policy/",
      },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      {
        name: "About Us",
        link: "https://www.mixit.com/aboutUs/",
      },
      {
        name: "Partners",
        link: "https://www.mixit.com/partners/",
      },
      {
        name: "Blog",
        link: "https://www.mixit.com/blog/",
      },
      {
        name: "FAQs",
        link: "https://www.mixit.com/FAQs/",
      },
    ],
  },
  {
    title: "CATEGORIES",
    links: [
      {
        name: "MEN",
        link: "https://www.mixit.com/men/",
      },
      {
        name: "WOMEN",
        link: "https://www.mixit.com/women/",
      },
      {
        name: "ACCESSORIES",
        link: "https://www.mixit.com/accessories/",
      },
      {
        name: "BEAUTY",
        link: "https://www.mixit.com/beauty/",
      },
    ],
  },
];
