import axios from 'axios';
import { apiUrl } from './api';

const raceMemo = [];

export default async (id) => {
  if (raceMemo[id]) {
    return raceMemo[id];
  }

  const requests = ['results', 'qualifying', 'pitstops'].map(async (index) => {
    const {
      data: {
        MRData: {
          RaceTable: { Races }
        }
      }
    } = await axios(`${apiUrl}/${id}/${index}.json`);
    return Races;
  });
  const results = await Promise.all(requests);
  raceMemo[id] = results;
  return Promise.all(requests);
};
