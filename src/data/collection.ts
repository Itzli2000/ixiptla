import type { ArtifactItem } from "../types";

import colibri from "../assets/images/colibri.png";
import sedente from "../assets/images/sedente.png";
import mono from "../assets/images/mono.png";
import sacerdotisa from "../assets/images/sacerdotisa.png";
import yax from "../assets/images/yax.png";

export const featuredArtifacts: ArtifactItem[] = [
  {
    id: "0",
    name: {
      es: "Copa del colibrí",
      en: "Hummingbird Cup",
    },
    culture: "Mixteca",
    period: "Posclásico (1225 d.C.)",
    image: colibri,
    slug: "hummingbird-cup",
    description: {
      es: "En esta delicada vasija se presenta a un colibrí posado sobre una copa que podría representar una flor. La copa es del tipo códice, mostrando diversos diseños simbólicos con grecas escalonadas que representan serpientes y animales alter ego de los dioses: un jaguar, dos águilas y un tlacuache. Fue depositada en la tumba 1 de Zaachila, fechada en 1225 d.C.",
      en: "This delicate vessel features a hummingbird perched on a cup that could represent a flower. The cup is of the codex type, showing various symbolic designs with stepped fretwork representing serpents and alter ego animals of the gods: a jaguar, two eagles, and an opossum. It was deposited in tomb 1 of Zaachila, dated to 1225 AD.",
    },
    museum: "Museo Nacional de Antropología",
    location: {
      es: "Zaachila, Valle de Zimatlán, Oaxaca",
      en: "Zaachila, Zimatlan Valley, Oaxaca",
    },
    dimensions: "No especificadas",
    material: "Cerámica policroma",
    technique: "Modelado y pintado",
  },
  {
    id: "1",
    name: {
      es: "Figura antropomorfa masculina",
      en: "Male Anthropomorphic Figurine",
    },
    culture: "Teotihuacán",
    period: "Clásico (200-600 d.C.)",
    image: sedente,
    slug: "male-anthropomorphic-figurine",
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
    id: "2",
    name: {
      es: "Vaso monito de obsidiana",
      en: "Obsidian Monkey Vessel",
    },
    culture: "Acolhua",
    period: "Prehispánico",
    image: mono,
    slug: "obsidian-monkey-vessel",
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
    id: "3",
    name: {
      es: "Figurilla mujer sacerdote",
      en: "Female Priest Figurine",
    },
    culture: "Maya",
    period: "Clásico (200 – 900 d.C.)",
    image: sacerdotisa,
    slug: "female-priest-figurine",
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
];

export const fullCollection: ArtifactItem[] = [
  ...featuredArtifacts,
  {
    id: "7",
    name: {
      es: "Yax Pasaj Chan Yopaat",
      en: "Yax Pasaj Chan Yopaat",
    },
    culture: "Maya",
    period: "Clásico Tardío (763 - 810 d.C.)",
    image: yax,
    slug: "yax-pasaj-chan-yopaat",
    description: {
      es: "Yax Pasaj Chan Yopaat fue uno de los gobernantes más destacados de la antigua ciudad maya de Copán, Honduras. Su nombre significa 'Primer Amanecer del Cielo', reflejando su conexión con la mitología y el orden cósmico maya. Ascendió al trono en el año 763 d.C. como el decimosexto rey de Copán y gobernó durante un periodo de resurgimiento cultural y arquitectónico tras una etapa de declive.",
      en: "Yax Pasaj Chan Yopaat was one of the most prominent rulers of the ancient Maya city of Copán, Honduras. His name means 'First Dawn of the Sky', reflecting his connection to Maya mythology and the cosmic order. He ascended the throne in 763 AD as the sixteenth king of Copán and ruled during a period of cultural and architectural resurgence after a stage of decline.",
    },
    museum: "Copán Ruinas",
    location: {
      es: "Copán, Honduras",
      en: "Copán, Honduras",
    },
    dimensions: "No especificadas",
    material: "Piedra tallada",
    technique: "Escultura y glifos mayas",
  },
];

export const getArtifactsByCulture = (culture: string) => {
  return fullCollection.filter((artifact) =>
    artifact.culture.toLowerCase().includes(culture.toLowerCase())
  );
};

export const cultures: string[] = [
  "all",
  "Mixteca",
  "Teotihuacán",
  "Acolhua",
  "Maya"
];
