import { Heart, Users2, Wrench, MessageCircle, User } from "lucide-react";

export const services = [
  {
    category: "Décoration et aménagement",
    icon: "🎨",
    items: [
      {
        id: "interior-decoration",
        name: "Décoration intérieur",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-decoration-interieur.webp",
      },
      {
        id: "facade-decoration",
        name: "Décoration de façade",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-decoration-facade.webp",
      },
      {
        id: "painting",
        name: "Peinture",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-peinture.webp",
      },
      {
        id: "plaster",
        name: "Plâtre et Placoplatre",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-platre-et-placoplatre.webp",
      },
      {
        id: "renovation",
        name: "Rénovation",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-renovation.webp",
      },
      {
        id: "store-layout",
        name: "Aménagement des magasins",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-amenagement-magasins.webp",
      },
      {
        id: "store-facade",
        name: "Façade des magasins",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-facade-magasins.webp",
      },
      {
        id: "stand-design",
        name: "Conception et réalisation des stands",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Conception-et-r%C3%A9alisation-des-stands.webp",
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
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-carrelage-sol-et-mur.webp",
      },
      {
        id: "polishing",
        name: "Ponçage et Lustrage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-poncage-lustrage.webp",
      },
      {
        id: "waterproofing",
        name: "Étanchéité",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-etancheite.webp",
      },
      {
        id: "insulation",
        name: "Isolation phonique et thermique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-isolation-phonique-et-thermique.webp",
      },
      {
        id: "pvc-parquet",
        name: "Revêtement de sol en PVC et Parquet",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-revetement-de-sol-en-PVC-et-parquet.webp",
      },
      {
        id: "epoxy",
        name: "Revêtement de sol en résine époxy",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-revetement-de-sol-en-resine-epoxy.webp",
      },
    ],
  },
  {
    category: "Construction",
    icon: "🏗️",
    items: [
      {
        id: "masonry",
        name: "Maçonnerie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-maconnerie.webp",
      },
      {
        id: "civil-engineering",
        name: "Gros œuvre",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-gros-oeuvre.webp",
      },
      {
        id: "wood-framing",
        name: "Charpente en bois",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-charpente-en-bois.webp",
      },
      {
        id: "demolition",
        name: "Démolition",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-demolition.webp",
      },
      {
        id: "earthworks",
        name: "Terrassement",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-terrassement.webp",
      },
      {
        id: "pool-construction",
        name: "Construction de piscine",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-construction-piscine.webp",
      },
      {
        id: "expansion-joint",
        name: "Couvre-joint de dilatation",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/joint.jpg",
      },
      {
        id: "core-drilling",
        name: "Carottage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/carrotage.jpg",
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
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-plomberie.webp",
      },
      {
        id: "heating-repair",
        name: "Réparation et installation de chauffage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-installation-chauffage.webp",
      },
      {
        id: "fridge-repair",
        name: "Réparation frigo",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-frigo.webp",
      },
      {
        id: "washing-machine-repair",
        name: "Réparation machine à laver",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-machine-a-laver.webp",
      },
      {
        id: "dishwasher-repair",
        name: "Réparation lave vaisselle",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-lave-vaisselle.webp",
      },
      {
        id: "ac-repair",
        name: "Réparation et installation de climatiseur",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-installation-climatiseur.webp",
      },
      {
        id: "oven-repair",
        name: "Réparation four",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-four.webp",
      },
      {
        id: "kneading-machine-repair",
        name: "Réparation pétrins et batteurs",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/R%C3%A9paration-p%C3%A9trins-et-batteurs.webp",
      },
      {
        id: "coffee-machine-repair",
        name: "Réparation machine à café",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Reparation-machine-a-cafe.webp",
      },
      {
        id: "centralized-ac",
        name: "Climatisation centralisée et désenfumage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-climatisation-centralisee-desenfumage.webp",
      },
    ],
  },
  {
    category: "Informatique et Réseaux",
    icon: "💻",
    items: [
      {
        id: "web-development",
        name: "Programmation web",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/programming_1.jpg",
      },
      {
        id: "mobile-development",
        name: "Programmation mobile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/qRCYveQ3SAVQcIAe3CbXRrmAsZ12-jwb3bib.jpeg",
      },
      {
        id: "networking",
        name: "Réseaux informatiques et téléphoniques",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/R%C3%A9seaux-informatiques-et-t%C3%A9l%C3%A9phoniques.webp",
      },
    ],
  },
  {
    category: "Image, impression et marketing",
    icon: "📸",
    items: [
      {
        id: "digital-printing",
        name: "Impression numérique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Impression-num%C3%A9rique.webp",
      },
      {
        id: "photography",
        name: "Photographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Photographie.webp",
      },
      {
        id: "videography",
        name: "Vidéographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Vid%C3%A9ographie.webp",
      },
      {
        id: "textile-printing",
        name: "Impression textile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Impression-textile.webp",
      },
      {
        id: "cnc-cutting",
        name: "Découpe forex, mdf, aluco, etc",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-decoupe-forex-mdf-aluco.webp",
      },
      {
        id: "community-management",
        name: "Community Management",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/community-management.webp",
      },
      {
        id: "graphic-design",
        name: "Infographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Infographie.webp",
      },
      {
        id: "voice-over",
        name: "Voix off",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/images_8.jpeg",
      },
      {
        id: "video-editing",
        name: "Montage vidéo",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Montage-vid%C3%A9o.webp",
      },
      {
        id: "online-advertising",
        name: "Facebook ads, Google ads, Tiktok ads, etc.",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Screenshot_from_2024-05-15_14-09-36.png",
      },
      {
        id: "translation",
        name: "Traduction",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/translation.jpeg",
      },
      {
        id: "web-writing",
        name: "Rédaction web",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/writer.jpeg",
      },
    ],
  },
  {
    category: "Sécurité et électricité",
    icon: "🔌",
    items: [
      {
        id: "electricity",
        name: "Electricité",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-electricite.webp",
      },
      {
        id: "cctv-installation",
        name: "Installation des caméras de surveillance",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-installation-cameras-surveillance_cjmL1AA.webp",
      },
      {
        id: "alarm-systems",
        name: "Alarmes anti-intrusion",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-alarme-anti-intrusion.webp",
      },
      {
        id: "fire-systems",
        name: "Systèmes anti-incendie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-systemes-anti-incendie.webp",
      },
      {
        id: "electric-gates",
        name: "Portail et Rideau électrique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-portail-rideau-electrique.webp",
      },
      {
        id: "intercom",
        name: "Interphone et visiophone",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-interphone-visiophone.webp",
      },
      {
        id: "home-automation",
        name: "Domotique (Smart Home)",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-domotique.webp",
      },
      {
        id: "satellite-dish",
        name: "Parabole",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-parabole.webp",
      },
    ],
  },
  {
    category: "Événements et mariages",
    icon: "🎉",
    items: [
      {
        id: "custom-cakes",
        name: "Gâteaux sur commande",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/G%C3%A2teaux-sur-commande.webp",
      },
      {
        id: "catering",
        name: "Traiteur",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Traiteur.webp",
      },
      {
        id: "makeup-hair",
        name: "Maquillage et coiffure à domicile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Maquillage-et-coiffure-%C3%A0-domicile.webp",
      },
      {
        id: "cake-design",
        name: "Cake design",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Cake-design.webp",
      },
      {
        id: "custom-tailoring",
        name: "Couture sur mesure",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Couture-sur-mesure.webp",
      },
      {
        id: "party-decoration",
        name: "Décoration des fêtes",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/decoration-fete.webp",
      },
      {
        id: "clown",
        name: "Clown",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/clown-dz.jpg",
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
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-architecture.webp",
      },
      {
        id: "civil-engineering",
        name: "Génie civil",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-genie-civil.webp",
      },
      {
        id: "soil-study",
        name: "Étude de sol",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-etude-sol.webp",
      },
      {
        id: "topography",
        name: "Topographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-topographie.webp",
      },
      {
        id: "solar-panels",
        name: "Panneaux solaires",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Panneaux-solaires.webp",
      },
      {
        id: "public-works",
        name: "Travaux publics",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/travaux-publics.webp",
      },
    ],
  },
  {
    category: "Santé",
    icon: "🩺",
    items: [
      {
        id: "nursing-care",
        name: "Soins infirmiers à domicile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Soins-infirmiers-%C3%A0-domicile.webp",
      },
      {
        id: "home-doctor",
        name: "Médecin à domicile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/medecine-uniforme-soins-sante-concept-journee-travailleurs-medicaux_185193-108329.avif",
      },
      {
        id: "caregiver",
        name: "Garde malade",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Garde-malade.webp",
      },
      {
        id: "medical-transport",
        name: "Transport sanitaire",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Transport-sanitaire.webp",
      },
    ],
  },
  {
    category: "Conseil et Consultation",
    icon: "💼",
    items: [
      {
        id: "legal-advice",
        name: "Conseil juridique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/depositphotos_41648917-stock-photo-justice-scale-and-gavel.webp",
      },
      {
        id: "accounting",
        name: "Comptabilité",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/accounting-software.webp",
      },
    ],
  },
  {
    category: "Métallerie",
    icon: "⚙️",
    items: [
      {
        id: "welding",
        name: "Soudure",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-soudure.webp",
      },
      {
        id: "metalwork",
        name: "Ferronnerie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-ferronnerie.webp",
      },
      {
        id: "locksmith",
        name: "Serrurerie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-serrurerie.webp",
      },
      {
        id: "metal-framing",
        name: "Charpente métallique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-charpente-metallique.webp",
      },
    ],
  },
  {
    category: "Entretien et nettoyage",
    icon: "🧹",
    items: [
      {
        id: "cleaning",
        name: "Nettoyage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-nettoyage.webp",
      },
      {
        id: "gardening",
        name: "Jardinage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-jardinage.webp",
      },
      {
        id: "pest-control",
        name: "Traitement des nuisibles",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-traitement-des-nuisibles.webp",
      },
      {
        id: "drainage",
        name: "Débouchage et vidange des canalisations",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-debouchage-vidange-canalisations.webp",
      },
    ],
  },
  {
    category: "Portes, fenêtres et meubles",
    icon: "🚪",
    items: [
      {
        id: "woodwork",
        name: "Menuiserie bois",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-menuiserie-bois.webp",
      },
      {
        id: "aluminum-pvc-work",
        name: "Menuiserie aluminium & PVC",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-menuiserie-aluminium-pvc.webp",
      },
      {
        id: "glasswork",
        name: "Vitrerie et miroiterie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-vitrerie-miroiterie.webp",
      },
      {
        id: "furniture-assembly",
        name: "Montage, démontage et réparation de meubles",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Montage-d%C3%A9montage-et-r%C3%A9paration-de-meubles.webp",
      },
    ],
  },
  {
    category: "Automobile",
    icon: "🚗",
    items: [
      {
        id: "auto-mechanics",
        name: "Mécanique auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/mecanique.jpg",
      },
      {
        id: "auto-bodywork",
        name: "Carrosserie auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/carrosserie.jpg",
      },
      {
        id: "auto-electricity",
        name: "Electricité auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/electricite-auto.jpg",
      },
    ],
  },
  {
    category: "Transport",
    icon: "🚚",
    items: [
      {
        id: "goods-transport",
        name: "Transport de marchandise",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-transport-marchandise.webp",
      },
      {
        id: "moving",
        name: "Déménagement",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-demenagement.webp",
      },
      {
        id: "auto-assistance",
        name: "Dépannage auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/D%C3%A9pannage-auto.webp",
      },
      {
        id: "water-delivery",
        name: "Livraison d'eau",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/9dd0a77fab0e837abe611ed1eea7eca6_XL.jpg",
      },
    ],
  },
  {
    category: "Assistance et bien-être",
    icon: "🤝",
    items: [
      {
        id: "childcare",
        name: "Garde enfants",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Garde-enfants.webp",
      },
      {
        id: "handling",
        name: "Manutention",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Manutention.webp",
      },
      {
        id: "multipurpose-agent",
        name: "Agent polyvalent",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Agent-polyvalent.webp",
      },
      {
        id: "delivery",
        name: "Livraisons et déplacements",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Livraisons-et-d%C3%A9placements.webp",
      },
      {
        id: "personal-assistance",
        name: "Assistance personnelle",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Assistant-personnel.webp",
      },
      {
        id: "sports-coach",
        name: "Coach sportif",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Coach-sportif.webp",
      },
      {
        id: "tutoring",
        name: "Cours de soutien",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/soutien-scolaire.jpg",
      },
    ],
  },
  {
    category: "Mécanique",
    icon: "⚙️",
    items: [
      {
        id: "mechanical-manufacturing",
        name: "Fabrication mécanique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Fabrication-m%C3%A9canique.webp",
      },
      {
        id: "mechanical-design",
        name: "Conception mécanique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Conception-m%C3%A9canique.webp",
      },
      {
        id: "elevators",
        name: "Ascenseurs, escalateurs et monte-charge",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-ascenseurs-escalateurs-monte-charge.webp",
      },
    ],
  },
];

export const navItems = [
  {
    title: "Tracking",
    href: "/tracking",
    icon: Heart,
  },
  {
    title: "Pros",
    href: "/pros",
    icon: Users2,
  },
  {
    title: "Requests",
    href: "/requests",
    icon: Wrench,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageCircle,
  },
  {
    title: "Account",
    href: "/account",
    icon: User,
  },
];

export const tabs = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "requests",
    label: "Requests",
  },
  {
    value: "offers",
    label: "Offers",
  },
];
