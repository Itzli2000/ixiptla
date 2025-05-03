export interface Translation {
  es: string;
  en: string;
}

export interface ArtifactItem {
  id: number;
  name: Translation;
  culture: string;
  period: string;
  image: string;
  slug: string;
  description: Translation;
  museum: string;
  location: Translation;
}

export interface Artifact {
  culture: string;
}

export const featuredArtifacts: ArtifactItem[] = [
  {
    id: 1,
    name: { es: "Piedra del Sol", en: "Piedra del Sol" },
    culture: "Mexica (Azteca)",
    period: "1502-1520 d.C.",
    image: "/images/artifacts/piedra-del-sol.jpg",
    slug: "piedra-del-sol",
    description: {
      es: "Monolito circular con representaciones cosmológicas y calendáricas",
      en: "Monolito circular with cosmological and calendrical representations",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 2,
    name: { es: "Chac Mool de Chichén Itzá", en: "Chac Mool de Chichén Itzá" },
    culture: "Maya",
    period: "800-900 d.C.",
    image: "/images/artifacts/chac-mool.jpg",
    slug: "chac-mool-chichen-itza",
    description: {
      es: "Escultura reclinada con recipiente sobre el vientre para ofrendas",
      en: "Reclined sculpture with a vessel on the belly for offerings",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 3,
    name: { es: "Máscara de Jade de Pakal", en: "Máscara de Jade de Pakal" },
    culture: "Maya",
    period: "683 d.C.",
    image: "/images/artifacts/mascara-jade-pakal.jpg",
    slug: "mascara-jade-pakal",
    description: {
      es: "Máscara funeraria del gobernante Pakal de Palenque",
      en: "Funerary mask of Pakal of Palenque",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 4,
    name: { es: "Cabeza Colosal Olmeca", en: "Cabeza Colosal Olmeca" },
    culture: "Olmeca",
    period: "1200-900 a.C.",
    image: "/images/artifacts/cabeza-olmeca.jpg",
    slug: "cabeza-colosal-olmeca",
    description: {
      es: "Escultura monumental en basalto de aproximadamente 3 metros",
      en: "Monumental sculpture in basalt approximately 3 meters tall",
    },
    museum: "Museo de Antropología de Xalapa",
    location: { es: "Veracruz", en: "Veracruz" },
  },
  {
    id: 5,
    name: { es: "Tláloc Monolítico", en: "Tláloc Monolítico" },
    culture: "Teotihuacana",
    period: "200-650 d.C.",
    image: "/images/artifacts/tlaloc-monolitico.jpg",
    slug: "tlaloc-monolitico",
    description: {
      es: "Representación del dios de la lluvia, tallado en una sola pieza",
      en: "Representation of the rain god, carved in one piece",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 6,
    name: { es: "Disco de la Muerte", en: "Disco de la Muerte" },
    culture: "Teotihuacana",
    period: "300-650 d.C.",
    image: "/images/artifacts/disco-muerte.jpg",
    slug: "disco-muerte-teotihuacan",
    description: {
      es: "Disco de piedra con representación de un cráneo descarnado",
      en: "Stone disc with representation of a disemboweled skull",
    },
    museum: "Museo del Sitio de Teotihuacán",
    location: { es: "Estado de México", en: "Mexico State" },
  },
];

export const fullCollection: ArtifactItem[] = [
  ...featuredArtifacts,
  {
    id: 7,
    name: { es: "Serpiente Emplumada", en: "Serpiente Emplumada" },
    culture: "Mexica (Azteca)",
    period: "1428-1521 d.C.",
    image: "/images/artifacts/serpiente-emplumada.jpg",
    slug: "serpiente-emplumada-mexica",
    description: {
      es: "Escultura de Quetzalcóatl, deidad del viento y sabiduría",
      en: "Sculture of Quetzalcóatl, deity of the wind and wisdom",
    },
    museum: "Museo del Templo Mayor",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 8,
    name: { es: "Coyolxauhqui", en: "Coyolxauhqui" },
    culture: "Mexica (Azteca)",
    period: "1469 d.C.",
    image: "/images/artifacts/coyolxauhqui.jpg",
    slug: "coyolxauhqui",
    description: {
      es: "Relieve circular que representa a la diosa lunar desmembrada",
      en: "Circular relief representing the disemboweled lunar goddess",
    },
    museum: "Museo del Templo Mayor",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 9,
    name: { es: "El Luchador Olmeca", en: "El Luchador Olmeca" },
    culture: "Olmeca",
    period: "1200-900 a.C.",
    image: "/images/artifacts/luchador-olmeca.jpg",
    slug: "luchador-olmeca",
    description: {
      es: "Escultura de basalto representando a un atleta o guerrero",
      en: "Basalt sculpture representing an athlete or warrior",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 10,
    name: { es: "Estela de la Venta", en: "Estela de la Venta" },
    culture: "Olmeca",
    period: "1000-600 a.C.",
    image: "/images/artifacts/estela-la-venta.jpg",
    slug: "estela-la-venta",
    description: {
      es: "Monumento con escritura y representaciones de gobernantes",
      en: "Monument with writing and representations of rulers",
    },
    museum: "Parque-Museo La Venta",
    location: { es: "Tabasco", en: "Tabasco" },
  },
  {
    id: 11,
    name: { es: "Máscara de Malinalco", en: "Máscara de Malinalco" },
    culture: "Mexica (Azteca)",
    period: "1450-1521 d.C.",
    image: "/images/artifacts/mascara-malinalco.jpg",
    slug: "mascara-malinalco",
    description: {
      es: "Máscara ceremonial con incrustaciones de turquesa y obsidiana",
      en: "Ceremonial mask with turquoise and obsidian inlays",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 12,
    name: { es: "Dintel 26 de Yaxchilán", en: "Dintel 26 de Yaxchilán" },
    culture: "Maya",
    period: "724 d.C.",
    image: "/images/artifacts/dintel-26-yaxchilan.jpg",
    slug: "dintel-26-yaxchilan",
    description: {
      es: "Relieve en piedra con escena de sacrificio ritual",
      en: "Relief in stone with ritual sacrifice scene",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 13,
    name: { es: "Xipe Tótec", en: "Xipe Tótec" },
    culture: "Mexica (Azteca)",
    period: "1450-1521 d.C.",
    image: "/images/artifacts/xipe-totec.jpg",
    slug: "xipe-totec",
    description: {
      es: "Escultura del dios desollado de la primavera y renovación",
      en: "Sculture of the disemboweled spring and renewal deity",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
  },
  {
    id: 14,
    name: { es: "Códice Borbónico", en: "Códice Borbónico" },
    culture: "Mexica (Azteca)",
    period: "1507-1521 d.C.",
    image: "/images/artifacts/codice-borbonico.jpg",
    slug: "codice-borbonico",
    description: {
      es: "Manuscrito pictográfico con calendario ritual y festividades",
      en: "Pictographic manuscript with ritual calendar and festivities",
    },
    museum: "Biblioteca Nacional de Francia",
    location: { es: "París (Réplica)", en: "Paris (Replica)" },
  },
  {
    id: 15,
    name: { es: "Jaguar de Xalla", en: "Jaguar de Xalla" },
    culture: "Teotihuacana",
    period: "200-650 d.C.",
    image: "/images/artifacts/jaguar-xalla.jpg",
    slug: "jaguar-xalla",
    description: {
      es: "Escultura felina en piedra verde con incrustaciones",
      en: "Felid sculpture in green stone with inlays",
    },
    museum: "Museo del Sitio de Teotihuacán",
    location: { es: "Estado de México", en: "Mexico State" },
  },
];

export const getArtifactsByCulture = (culture: string) => {
  return fullCollection.filter((artifact) =>
    artifact.culture.toLowerCase().includes(culture.toLowerCase())
  );
};

export const cultures: string[] = ["All", "Maya", "Azteca", "Olmeca"];
