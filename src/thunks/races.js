import axios from 'axios';
import { apiUrl } from './api';

let races = [];

export default async () => {
  if (races.length > 0) {
    return races;
  }

  const {
    data: {
      MRData: {
        RaceTable: { Races }
      }
    }
  } = await axios(`${apiUrl}.json`);
  races = Races;
  return races;
};
