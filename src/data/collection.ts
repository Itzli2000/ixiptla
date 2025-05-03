import type { ArtifactItem } from "../types";

import colibri from "../assets/images/colibri.png";

export const featuredArtifacts: ArtifactItem[] = [
  {
    id: 0,
    name: { es: "Copa del Colibrí", en: "Hummingbird Cup" },
    culture: "Mixteca",
    period: "1225 d.C.",
    image: colibri,
    slug: "copa-colibri",
    description: {
      es: "Delicada vasija tipo códice que muestra un colibrí azul posado sobre una copa, con diseños simbólicos incluyendo grecas escalonadas de serpientes y animales alter ego de los dioses. Encontrada en la tumba 1 de Zaachila.",
      en: "Delicate codex-type vessel showing a blue hummingbird perched on a cup, with symbolic designs including stepped frets of serpents and animal alter egos of the gods. Found in tomb 1 of Zaachila."
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
    dimensions: "15 x 12 x 8 cm",
    material: "Cerámica policromada",
    technique: "Modelado y pintura"
  },
  {
    id: 1,
    name: { es: "Piedra del Sol", en: "Piedra del Sol" },
    culture: "Mexica (Azteca)",
    period: "1502-1520 d.C.",
    image: colibri,
    slug: "piedra-del-sol",
    description: {
      es: "Monolito circular con representaciones cosmológicas y calendáricas",
      en: "Monolito circular with cosmological and calendrical representations",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
    dimensions: "358 x 98 cm",
    material: "Basalto de olivino",
    technique: "Tallado en piedra"
  },
  {
    id: 2,
    name: { es: "Chac Mool de Chichén Itzá", en: "Chac Mool de Chichén Itzá" },
    culture: "Maya",
    period: "800-900 d.C.",
    image: colibri,
    slug: "chac-mool-chichen-itza",
    description: {
      es: "Escultura reclinada con recipiente sobre el vientre para ofrendas",
      en: "Reclined sculpture with a vessel on the belly for offerings",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
    dimensions: "130 x 90 x 60 cm",
    material: "Piedra caliza",
    technique: "Esculpido"
  },
  {
    id: 3,
    name: { es: "Máscara de Jade de Pakal", en: "Máscara de Jade de Pakal" },
    culture: "Maya",
    period: "683 d.C.",
    image: colibri,
    slug: "mascara-jade-pakal",
    description: {
      es: "Máscara funeraria del gobernante Pakal de Palenque",
      en: "Funerary mask of Pakal of Palenque",
    },
    museum: "Museo Nacional de Antropología",
    location: { es: "CDMX", en: "CDMX" },
    dimensions: "21.8 x 20.5 cm",
    material: "Jade, concha y obsidiana",
    technique: "Mosaico e incrustación"
  },
  {
    id: 4,
    name: { es: "Cabeza Colosal Olmeca", en: "Cabeza Colosal Olmeca" },
    culture: "Olmeca",
    period: "1200-900 a.C.",
    image: colibri,
    slug: "cabeza-colosal-olmeca",
    description: {
      es: "Escultura monumental en basalto de aproximadamente 3 metros",
      en: "Monumental sculpture in basalt approximately 3 meters tall",
    },
    museum: "Museo de Antropología de Xalapa",
    location: { es: "Veracruz", en: "Veracruz" },
    dimensions: "300 x 200 x 200 cm",
    material: "Basalto",
    technique: "Tallado monumental"
  },
  {
    id: 5,
    name: { es: "Tláloc Monolítico", en: "Tláloc Monolítico" },
    culture: "Teotihuacana",
    period: "200-650 d.C.",
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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
    image: colibri,
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

export const cultures: string[] = ["All", "Mixteca", "Maya", "Azteca", "Olmeca"];
