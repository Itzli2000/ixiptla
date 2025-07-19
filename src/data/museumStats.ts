import type { MuseumStats } from '../types/home';
import { getTotalArtifacts } from './cultureData';

export const museumStats: MuseumStats = {
  artifacts: getTotalArtifacts(),
  cultures: 5,
  models3D: 25,
  experiences: 'Immersive'
};

export const getStatsArray = () => [
  {
    key: 'artifacts',
    value: museumStats.artifacts,
    suffix: '+',
    duration: 2000
  },
  {
    key: 'cultures',
    value: museumStats.cultures,
    suffix: '',
    duration: 1500
  },
  {
    key: 'models3D',
    value: museumStats.models3D,
    suffix: '+',
    duration: 2500
  },
  {
    key: 'experiences',
    value: 1,
    suffix: '',
    duration: 1000,
    isText: true
  }
];