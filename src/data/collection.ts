import type { ArtifactItem } from "../types";

import colibri from "../assets/images/colibri.png";
import sedente from "../assets/images/sedente.png";
import mono from "../assets/images/mono.png";
import sacerdotisa from "../assets/images/sacerdotisa.png";

export const featuredArtifacts: ArtifactItem[] = [
  {
    id: 0,
    name: {
      es: "Copa del colibrí",
      en: "Hummingbird Cup",
    },
    culture: "Mixteca",
    period: "Posclásico (1225 d.C.)",
    image: colibri,
    slug: "copa-colibri",
    description: {
      es: "En esta delicada vasija se presenta a un colibrí posado sobre una copa que podría representar una flor. La copa es del tipo códice, mostrando diversos diseños simbólicos con grecas escalonadas que representan serpientes y animales alter ego de los dioses: un jaguar, dos águilas y un tlacuache. Fue depositada en la tumba 1 de Zaachila, fechada en 1225 d.C.",
      en: "This delicate vessel features a hummingbird perched on a cup that could represent a flower. The cup is of the codex type, showing various symbolic designs with stepped fretwork representing serpents and alter ego animals of the gods: a jaguar, two eagles, and an opossum. It was deposited in tomb 1 of Zaachila, dated to 1225 AD.",
    },
    museum: "Museo Nacional de Antropología", // Asumiendo este museo debido al contexto
    location: {
      es: "Zaachila, Valle de Zimatlán, Oaxaca",
      en: "Zaachila, Zimatlan Valley, Oaxaca",
    },
    dimensions: "No especificadas", // Información no proporcionada en el texto
    material: "Cerámica policroma",
    technique: "Modelado y pintado",
  },
  {
    id: 1,
    name: {
      es: "Figura antropomorfa masculina",
      en: "Male Anthropomorphic Figurine",
    },
    culture: "Teotihuacán",
    period: "Clásico (200-600 d.C.)",
    image: sedente,
    slug: "figura-antropomorfa-masculina",
    description: {
      es: "Durante la etapa culminante (150-750 a.C) la cultura de Teotihuacán alcanzó su máximo esplendor. Prueba de ello son los objetos creados por notables artesanos que perfeccionaron diversas formas de trabajar la cerámica, tanto en las vasijas, como incensarios, braseros, candeleros y figurillas. Las figurillas de tiempos teotihuacanos son muy diferentes en tamaño y tipo a las de otros periodos. En su mayoría fueron hechas con moldes y retocadas. Muchas de ellas aparecen con vestimenta, en parte pegada sobre una estructura triangular.",
      en: "During the peak stage (150-750 BC) the Teotihuacan culture reached its maximum splendor. Proof of this are the objects created by notable artisans who perfected various forms of working with ceramics, both in vessels and in censers, braziers, candlesticks and figurines. Teotihuacan-era figurines are very different in size and type from those of other periods. Most of them were made with molds and retouched. Many of them appear with clothing, partly glued onto a triangular structure.",
    },
    museum: "Museo Nacional de Antropología",
    location: {
      es: "Teotihuacán, Estado de México",
      en: "Teotihuacan, State of Mexico",
    },
    dimensions: "12.5 x 6.4 x 7.8 cm",
    material: "Cerámica",
    technique: "Moldeado con retoque manual",
  },
  {
    id: 2,
    name: {
      es: "Vaso monito de obsidiana",
      en: "Obsidian Monkey Vessel",
    },
    culture: "Acolhua",
    period: "Prehispánico",
    image: mono,
    slug: "vaso-monito-obsidiana",
    description: {
      es: "Una de las piezas más emblemáticas del Museo Nacional de Antropología, conocida como 'monito de obsidiana'. Es una obra maestra del arte prehispánico por la calidad de su talla y acabado. Fue elaborada en obsidiana dorada de la Sierra de las Navajas, Hidalgo, y su manufactura empleó diversos materiales líticos y abrasivos similares a otros objetos prehispánicos de la Cuenca de México.",
      en: "One of the most emblematic pieces of the National Museum of Anthropology, known as the 'obsidian monkey'. It is a masterpiece of pre-Hispanic art due to the quality of its carving and finish. It was made from golden obsidian from the Sierra de las Navajas, Hidalgo, and its manufacture used various lithic and abrasive materials similar to other pre-Hispanic objects from the Basin of Mexico.",
    },
    museum: "Museo Nacional de Antropología",
    location: {
      es: "Texcoco, Estado de México (lugar de hallazgo)",
      en: "Texcoco, State of Mexico (place of discovery)",
    },
    dimensions: "No especificadas",
    material: "Obsidiana dorada de la Sierra de las Navajas, Hidalgo",
    technique: "Tallado y pulido con materiales líticos y abrasivos",
  },
  {
    id: 3,
    name: {
      es: "Figurilla mujer sacerdote",
      en: "Female Priest Figurine",
    },
    culture: "Maya",
    period: "Clásico (200 – 900 d.C.)",
    image: sacerdotisa,
    slug: "figurilla-mujer-sacerdote",
    description: {
      es: "Los mayas conformaron una sociedad altamente estratificada; esta jerarquización social puede ser reconstruida a partir de la interpretación de sus restos materiales: las numerosas figurillas y cerámica encontradas en los entierros localizados en la Isla de Jaina, ubicada en la costa de Campeche, donde fueron depositadas a manera de ofrenda. En esta figurilla se representó a un personaje femenino de alto rango social.",
      en: "The Maya formed a highly stratified society; this social hierarchy can be reconstructed from the interpretation of their material remains: the numerous figurines and ceramics found in the burials located on the Island of Jaina, situated on the coast of Campeche, where they were deposited as offerings. This figurine represents a female character of high social rank.",
    },
    museum: "Museo Nacional de Antropología",
    location: {
      es: "Jaina, Campeche",
      en: "Jaina, Campeche",
    },
    dimensions: "No especificadas",
    material: "Cerámica",
    technique: "Figurilla sonaja antropomorfa",
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

export const cultures: string[] = [
  "All",
  "Mixteca",
  "Maya",
  "Azteca",
  "Olmeca",
];
