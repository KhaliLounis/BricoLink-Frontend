import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export const services = [
  {
    category: "Décoration et aménagement",
    icon: "🎨",
    items: [
      {
        id: "interior-decoration",
        name: "Décoration intérieur",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "facade-decoration",
        name: "Décoration de façade",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "painting",
        name: "Peinture",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "plaster",
        name: "Plâtre et Placoplatre",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "renovation",
        name: "Rénovation",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "store-layout",
        name: "Aménagement des magasins",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "store-facade",
        name: "Façade des magasins",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "stand-design",
        name: "Conception et réalisation des stands",
        image: "/assets/service-renovation.webp",
      },
    ],
  },
  {
    category: "Sol et mur",
    icon: "🧱",
    items: [
      {
        id: "tiling",
        name: "Carrelage sol et mur",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "polishing",
        name: "Ponçage et Lustrage",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "waterproofing",
        name: "Étanchéité",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "insulation",
        name: "Isolation phonique et thermique",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "pvc-parquet",
        name: "Revêtement de sol en PVC et Parquet",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "epoxy",
        name: "Revêtement de sol en résine époxy",
        image: "/assets/service-renovation.webp",
      },
    ],
  },
  {
    category: "Construction",
    icon: "🏗️",
    items: [
      {
        id: "civil-engineering",
        name: "Génie civil",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "earthworks",
        name: "Terrassement et location engins",
        image: "/assets/service-decoration-facade.webp",
      },
    ],
  },
  {
    category: "Plomberie, électroménager et froid",
    icon: "🚰",
    items: [
      {
        id: "plumbing",
        name: "Plomberie",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "heating-repair",
        name: "Réparation et installation de chauffage",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "fridge-repair",
        name: "Réparation frigo",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "washing-machine-repair",
        name: "Réparation machine à laver",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "ac-repair",
        name: "Réparation et installation de climatiseur",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "oven-repair",
        name: "Réparation four",
        image: "/assets/service-decoration-facade.webp",
      },
    ],
  },
  {
    category: "Informatique et Réseaux",
    icon: "💻",
    items: [
      {
        id: "graphic-design",
        name: "Infographie",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "video-editing",
        name: "Montage vidéo",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "cctv-installation",
        name: "Installation des caméras de surveillance",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "alarm-systems",
        name: "Alarmes anti-intrusion",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "fire-systems",
        name: "Systèmes anti-incendie",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "intercom",
        name: "Interphone et visiophone",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "networking",
        name: "Réseaux informatiques",
        image: "/assets/service-renovation.webp",
      },
    ],
  },
  {
    category: "Image, imassets/pression et marketing",
    icon: "📸",
    items: [
      {
        id: "printing",
        name: "Impression",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "marketing",
        name: "Marketing",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "photography",
        name: "Photographie",
        image: "/assets/service-renovation.webp",
      },
    ],
  },
  {
    category: "Sécurité et électricité",
    icon: "🔌",
    items: [
      {
        id: "elevators",
        name: "Ascenseurs, escalateurs et monte-charge",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "solar-panels",
        name: "Panneaux solaires",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "electric-gates",
        name: "Portail et Rideau électrique",
        image: "/assets/service-renovation.webp",
      },
    ],
  },
  {
    category: "Événements et mariages",
    icon: "🎉",
    items: [
      {
        id: "party-decoration",
        name: "Décoration des fêtes",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "event-organization",
        name: "Organisation des événements",
        image: "/assets/service-decoration-facade.webp",
      },
    ],
  },
  {
    category: "Étude et ingénierie",
    icon: "📐",
    items: [
      {
        id: "architecture",
        name: "Architecture",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "mechanical-design",
        name: "Conception mécanique",
        image: "/assets/service-plomberie.webp",
      },
    ],
  },
  {
    category: "Santé",
    icon: "🩺",
    items: [
      {
        id: "general-medicine",
        name: "Médecine générale",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "specialized-medicine",
        name: "Médecine spécialisée",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "dentistry",
        name: "Dentisterie",
        image: "/assets/service-decoration-facade.webp",
      },
      {
        id: "nutritionist",
        name: "Nutritionniste",
        image: "/assets/service-renovation.webp",
      },
      {
        id: "optician",
        name: "Opticien",
        image: "/assets/service-plomberie.webp",
      },
      {
        id: "mental-health",
        name: "Santé mentale",
        image: "/assets/service-decoration-facade.webp",
      },
    ],
  },
];
