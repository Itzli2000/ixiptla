// Static imports for all artifact images
import colibriImg from '../assets/images/colibri.png';
import mictlanImg from '../assets/images/mictlan.png';
import sedenteImg from '../assets/images/sedente.png';
import monitoImg from '../assets/images/monito.png';
import sacerdotisaImg from '../assets/images/sacerdotisa.png';
import yaxImg from '../assets/images/yax.png';
import mono2Img from '../assets/images/mono2.png';

// Image mapping object
const imageMap = {
  'colibri.png': colibriImg,
  'mictlan.png': mictlanImg,
  'sedente.png': sedenteImg,
  'monito.png': monitoImg,
  'sacerdotisa.png': sacerdotisaImg,
  'yax.png': yaxImg,
  'mono2.png': mono2Img,
} as const;

/**
 * Get image metadata for a given image filename
 * @param filename - The image filename (e.g., 'colibri.png')
 * @returns The image metadata or a fallback
 */
export function getImageByFilename(filename: string) {
  const image = imageMap[filename as keyof typeof imageMap];
  if (!image) {
    console.warn(`Image not found: ${filename}. Available images:`, Object.keys(imageMap));
    // Return the first available image as fallback
    return imageMap['colibri.png'];
  }
  return image;
}

export type ImageFilename = keyof typeof imageMap; 