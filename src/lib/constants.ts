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
        code: 101,
      },
      {
        id: "facade-decoration",
        name: "Décoration de façade",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-decoration-facade.webp",
        code: 102,
      },
      {
        id: "painting",
        name: "Peinture",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-peinture.webp",
        code: 103,
      },
      {
        id: "plaster",
        name: "Plâtre et Placoplatre",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-platre-et-placoplatre.webp",
        code: 104,
      },
      {
        id: "renovation",
        name: "Rénovation",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-renovation.webp",
        code: 105,
      },
      {
        id: "store-layout",
        name: "Aménagement des magasins",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-amenagement-magasins.webp",
        code: 106,
      },
      {
        id: "store-facade",
        name: "Façade des magasins",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-facade-magasins.webp",
        code: 107,
      },
      {
        id: "stand-design",
        name: "Conception et réalisation des stands",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Conception-et-r%C3%A9alisation-des-stands.webp",
        code: 108,
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
        code: 201,
      },
      {
        id: "polishing",
        name: "Ponçage et Lustrage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-poncage-lustrage.webp",
        code: 202,
      },
      {
        id: "waterproofing",
        name: "Étanchéité",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-etancheite.webp",
        code: 203,
      },
      {
        id: "insulation",
        name: "Isolation phonique et thermique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-isolation-phonique-et-thermique.webp",
        code: 204,
      },
      {
        id: "pvc-parquet",
        name: "Revêtement de sol en PVC et Parquet",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-revetement-de-sol-en-PVC-et-parquet.webp",
        code: 205,
      },
      {
        id: "epoxy",
        name: "Revêtement de sol en résine époxy",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-revetement-de-sol-en-resine-epoxy.webp",
        code: 206,
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
        code: 301,
      },
      {
        id: "civil-engineering",
        name: "Gros œuvre",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-gros-oeuvre.webp",
        code: 302,
      },
      {
        id: "wood-framing",
        name: "Charpente en bois",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-charpente-en-bois.webp",
        code: 303,
      },
      {
        id: "demolition",
        name: "Démolition",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-demolition.webp",
        code: 304,
      },
      {
        id: "earthworks",
        name: "Terrassement",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-terrassement.webp",
        code: 305,
      },
      {
        id: "pool-construction",
        name: "Construction de piscine",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-construction-piscine.webp",
        code: 306,
      },
      {
        id: "expansion-joint",
        name: "Couvre-joint de dilatation",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/joint.jpg",
        code: 307,
      },
      {
        id: "core-drilling",
        name: "Carottage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/carrotage.jpg",
        code: 308,
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
        code: 401,
      },
      {
        id: "heating-repair",
        name: "Réparation et installation de chauffage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-installation-chauffage.webp",
        code: 402,
      },
      {
        id: "fridge-repair",
        name: "Réparation frigo",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-frigo.webp",
        code: 403,
      },
      {
        id: "washing-machine-repair",
        name: "Réparation machine à laver",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-machine-a-laver.webp",
        code: 404,
      },
      {
        id: "dishwasher-repair",
        name: "Réparation lave vaisselle",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-lave-vaisselle.webp",
        code: 405,
      },
      {
        id: "ac-repair",
        name: "Réparation et installation de climatiseur",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-installation-climatiseur.webp",
        code: 406,
      },
      {
        id: "oven-repair",
        name: "Réparation four",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-reparation-four.webp",
        code: 407,
      },
      {
        id: "kneading-machine-repair",
        name: "Réparation pétrins et batteurs",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/R%C3%A9paration-p%C3%A9trins-et-batteurs.webp",
        code: 408,
      },
      {
        id: "coffee-machine-repair",
        name: "Réparation machine à café",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Reparation-machine-a-cafe.webp",
        code: 409,
      },
      {
        id: "centralized-ac",
        name: "Climatisation centralisée et désenfumage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-climatisation-centralisee-desenfumage.webp",
        code: 410,
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
        code: 501,
      },
      {
        id: "mobile-development",
        name: "Programmation mobile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/qRCYveQ3SAVQcIAe3CbXRrmAsZ12-jwb3bib.jpeg",
        code: 502,
      },
      {
        id: "networking",
        name: "Réseaux informatiques et téléphoniques",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/R%C3%A9seaux-informatiques-et-t%C3%A9l%C3%A9phoniques.webp",
        code: 503,
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
        code: 601,
      },
      {
        id: "photography",
        name: "Photographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Photographie.webp",
        code: 602,
      },
      {
        id: "videography",
        name: "Vidéographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Vid%C3%A9ographie.webp",
        code: 603,
      },
      {
        id: "textile-printing",
        name: "Impression textile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Impression-textile.webp",
        code: 604,
      },
      {
        id: "cnc-cutting",
        name: "Découpe forex, mdf, aluco, etc",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-decoupe-forex-mdf-aluco.webp",
        code: 605,
      },
      {
        id: "community-management",
        name: "Community Management",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/community-management.webp",
        code: 606,
      },
      {
        id: "graphic-design",
        name: "Infographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Infographie.webp",
        code: 607,
      },
      {
        id: "voice-over",
        name: "Voix off",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/images_8.jpeg",
        code: 608,
      },
      {
        id: "video-editing",
        name: "Montage vidéo",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Montage-vid%C3%A9o.webp",
        code: 609,
      },
      {
        id: "online-advertising",
        name: "Facebook ads, Google ads, Tiktok ads, etc.",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Screenshot_from_2024-05-15_14-09-36.png",
        code: 610,
      },
      {
        id: "translation",
        name: "Traduction",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/translation.jpeg",
        code: 611,
      },
      {
        id: "web-writing",
        name: "Rédaction web",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/writer.jpeg",
        code: 612,
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
        code: 701,
      },
      {
        id: "cctv-installation",
        name: "Installation des caméras de surveillance",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-installation-cameras-surveillance_cjmL1AA.webp",
        code: 702,
      },
      {
        id: "alarm-systems",
        name: "Alarmes anti-intrusion",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-alarme-anti-intrusion.webp",
        code: 703,
      },
      {
        id: "fire-systems",
        name: "Systèmes anti-incendie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-systemes-anti-incendie.webp",
        code: 704,
      },
      {
        id: "electric-gates",
        name: "Portail et Rideau électrique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-portail-rideau-electrique.webp",
        code: 705,
      },
      {
        id: "intercom",
        name: "Interphone et visiophone",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-interphone-visiophone.webp",
        code: 706,
      },
      {
        id: "home-automation",
        name: "Domotique (Smart Home)",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-domotique.webp",
        code: 707,
      },
      {
        id: "satellite-dish",
        name: "Parabole",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-parabole.webp",
        code: 708,
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
        code: 801,
      },
      {
        id: "catering",
        name: "Traiteur",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Traiteur.webp",
        code: 802,
      },
      {
        id: "makeup-hair",
        name: "Maquillage et coiffure à domicile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Maquillage-et-coiffure-%C3%A0-domicile.webp",
        code: 803,
      },
      {
        id: "cake-design",
        name: "Cake design",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Cake-design.webp",
        code: 804,
      },
      {
        id: "custom-tailoring",
        name: "Couture sur mesure",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Couture-sur-mesure.webp",
        code: 805,
      },
      {
        id: "party-decoration",
        name: "Décoration des fêtes",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/decoration-fete.webp",
        code: 806,
      },
      {
        id: "clown",
        name: "Clown",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/clown-dz.jpg",
        code: 807,
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
        code: 901,
      },
      {
        id: "civil-engineering",
        name: "Génie civil",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-genie-civil.webp",
        code: 902,
      },
      {
        id: "soil-study",
        name: "Étude de sol",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-etude-sol.webp",
        code: 903,
      },
      {
        id: "topography",
        name: "Topographie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-topographie.webp",
        code: 904,
      },
      {
        id: "solar-panels",
        name: "Panneaux solaires",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Panneaux-solaires.webp",
        code: 905,
      },
      {
        id: "public-works",
        name: "Travaux publics",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/travaux-publics.webp",
        code: 906,
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
        code: 1001,
      },
      {
        id: "home-doctor",
        name: "Médecin à domicile",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/medecine-uniforme-soins-sante-concept-journee-travailleurs-medicaux_185193-108329.avif",
        code: 1002,
      },
      {
        id: "caregiver",
        name: "Garde malade",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Garde-malade.webp",
        code: 1003,
      },
      {
        id: "medical-transport",
        name: "Transport sanitaire",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Transport-sanitaire.webp",
        code: 1004,
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
        code: 1101,
      },
      {
        id: "accounting",
        name: "Comptabilité",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/accounting-software.webp",
        code: 1102,
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
        code: 1201,
      },
      {
        id: "metalwork",
        name: "Ferronnerie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-ferronnerie.webp",
        code: 1202,
      },
      {
        id: "locksmith",
        name: "Serrurerie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-serrurerie.webp",
        code: 1203,
      },
      {
        id: "metal-framing",
        name: "Charpente métallique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-charpente-metallique.webp",
        code: 1204,
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
        code: 1301,
      },
      {
        id: "gardening",
        name: "Jardinage",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-jardinage.webp",
        code: 1302,
      },
      {
        id: "pest-control",
        name: "Traitement des nuisibles",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-traitement-des-nuisibles.webp",
        code: 1303,
      },
      {
        id: "drainage",
        name: "Débouchage et vidange des canalisations",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-debouchage-vidange-canalisations.webp",
        code: 1304,
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
        code: 1401,
      },
      {
        id: "aluminum-pvc-work",
        name: "Menuiserie aluminium & PVC",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-menuiserie-aluminium-pvc.webp",
        code: 1402,
      },
      {
        id: "glasswork",
        name: "Vitrerie et miroiterie",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-vitrerie-miroiterie.webp",
        code: 1403,
      },
      {
        id: "furniture-assembly",
        name: "Montage, démontage et réparation de meubles",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Montage-d%C3%A9montage-et-r%C3%A9paration-de-meubles.webp",
        code: 1404,
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
        code: 1501,
      },
      {
        id: "auto-bodywork",
        name: "Carrosserie auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/carrosserie.jpg",
        code: 1502,
      },
      {
        id: "auto-electricity",
        name: "Electricité auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/electricite-auto.jpg",
        code: 1503,
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
        code: 1601,
      },
      {
        id: "moving",
        name: "Déménagement",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-demenagement.webp",
        code: 1602,
      },
      {
        id: "auto-assistance",
        name: "Dépannage auto",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/D%C3%A9pannage-auto.webp",
        code: 1603,
      },
      {
        id: "water-delivery",
        name: "Livraison d'eau",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/9dd0a77fab0e837abe611ed1eea7eca6_XL.jpg",
        code: 1604,
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
        code: 1701,
      },
      {
        id: "handling",
        name: "Manutention",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Manutention.webp",
        code: 1702,
      },
      {
        id: "multipurpose-agent",
        name: "Agent polyvalent",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Agent-polyvalent.webp",
        code: 1703,
      },
      {
        id: "delivery",
        name: "Livraisons et déplacements",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Livraisons-et-d%C3%A9placements.webp",
        code: 1704,
      },
      {
        id: "personal-assistance",
        name: "Assistance personnelle",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Assistant-personnel.webp",
        code: 1705,
      },
      {
        id: "sports-coach",
        name: "Coach sportif",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Coach-sportif.webp",
        code: 1706,
      },
      {
        id: "tutoring",
        name: "Cours de soutien",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/soutien-scolaire.jpg",
        code: 1707,
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
        code: 1801,
      },
      {
        id: "mechanical-design",
        name: "Conception mécanique",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/Conception-m%C3%A9canique.webp",
        code: 1802,
      },
      {
        id: "elevators",
        name: "Ascenseurs, escalateurs et monte-charge",
        image:
          "https://bricoram-prod-assets.s3.amazonaws.com/prod-assets/media/fixtures/service-ascenseurs-escalateurs-monte-charge.webp",
        code: 1803,
      },
    ],
  },
];

export const offerResponses = [
  {
    code: 101,
    message: "I accept the offer and will proceed with the work.",
  },
  {
    code: 102,
    message: "I accept the offer and will contact you shortly.",
  },
  {
    code: 103,
    message: "I accept the offer and will start immediately.",
  },
  {
    code: 104,
    message: "I accept the offer and will provide updates regularly.",
  },
  {
    code: 105,
    message: "I accept the offer and will ensure high-quality work.",
  },
  {
    code: 106,
    message: "I accept the offer and will complete it on time.",
  },
  {
    code: 107,
    message: "I accept the offer and will follow your instructions carefully.",
  },
  {
    code: 108,
    message: "I accept the offer and will use the best materials.",
  },
  {
    code: 109,
    message: "I accept the offer and will provide a detailed plan.",
  },
  {
    code: 110,
    message: "I accept the offer and will ensure your satisfaction.",
  },
  {
    code: 201,
    message: "I cannot accept the offer due to scheduling conflicts.",
  },
  {
    code: 202,
    message: "I cannot accept the offer as it is outside my service area.",
  },
  {
    code: 203,
    message: "I cannot accept the offer due to budget constraints.",
  },
  {
    code: 204,
    message: "I cannot accept the offer as I am fully booked.",
  },
  {
    code: 205,
    message: "I cannot accept the offer due to lack of required materials.",
  },
  {
    code: 206,
    message: "I cannot accept the offer as it does not match my expertise.",
  },
  {
    code: 207,
    message: "I cannot accept the offer due to personal reasons.",
  },
  {
    code: 208,
    message: "I cannot accept the offer as the timeline is too tight.",
  },
  {
    code: 209,
    message: "I cannot accept the offer due to unforeseen circumstances.",
  },
  {
    code: 210,
    message: "I cannot accept the offer as it exceeds my capacity.",
  },
];

export const navItems = [
  {
    title: "Tracking",
    href: "/tracking",
    icon: Heart,
  },
  {
    title: "Artisans",
    href: "/artisans",
    icon: Users2,
  },
  {
    title: "Requests",
    href: "/requests",
    icon: Wrench,
  },
  {
    title: "Chats",
    href: "/chats",
    icon: MessageCircle,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export const trackingTabs = [
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

export const requestsTabs = [
  {
    value: "all",
    label: "All",
    icon: "🌟",
  },
  {
    value: "reviews",
    label: "Reviews",
    icon: "⭐",
  },
  {
    value: "no-offers",
    label: "No offers",
    icon: "📝",
  },
  {
    value: "nearby",
    label: "Nearby",
    icon: "📍",
  },
];

export const artisansTabs = [
  {
    value: "all",
    label: "All",
    icon: "🌟",
  },
  {
    value: "new",
    label: "New",
    icon: "🆕",
  },
  {
    value: "well-rated",
    label: "Well Rated",
    icon: "👍",
  },
  {
    value: "poorly-rated",
    label: "Poorly Rated",
    icon: "👎",
  },
];
