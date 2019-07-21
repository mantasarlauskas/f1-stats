import axios from 'axios';

let racesMemo = [];
const raceMemo = [];

export const apiUrl = 'https://ergast.com/api/f1/2019';
// eslint-disable-next-line max-len
export const photoUrl = 'http://res.cloudinary.com/mantasarlauskas/image/upload/f_auto,fl_lossy,q_auto:low/f1';

// eslint-disable-next-line max-len
const parseDriverStandings = data => data.map(({ Constructors, Driver: { driverId }, ...restData }) => ({
  constructorId: Constructors[0].constructorId,
  driverId,
  ...restData
}));

const parseTeamStandings = data => data.map(({ Constructor: { constructorId }, ...restData }) => ({
  constructorId,
  ...restData
}));

export const getDriversFromAPI = async () => {
  const {
    data: {
      MRData: {
        DriverTable: { Drivers }
      }
    }
  } = await axios(`${apiUrl}/drivers.json`);
  return Drivers;
};

export const getTeamsFromAPI = async () => {
  const {
    data: {
      MRData: {
        ConstructorTable: { Constructors }
      }
    }
  } = await axios(`${apiUrl}/constructors.json`);
  return Constructors;
};

export const getDriverStandingsFromAPI = async () => {
  const {
    data: {
      MRData: {
        StandingsTable: { StandingsLists }
      }
    }
  } = await axios(`${apiUrl}/driverStandings.json`);
  return parseDriverStandings(StandingsLists[0].DriverStandings);
};

export const getTeamStandingsFromAPI = async () => {
  const {
    data: {
      MRData: {
        StandingsTable: { StandingsLists }
      }
    }
  } = await axios(`${apiUrl}/constructorStandings.json`);
  return parseTeamStandings(StandingsLists[0].ConstructorStandings);
};

export const getRaces = async () => {
  if (racesMemo.length > 0) {
    return racesMemo;
  }

  const {
    data: {
      MRData: {
        RaceTable: { Races }
      }
    }
  } = await axios(`${apiUrl}.json`);
  racesMemo = Races;
  return racesMemo;
};

export const getRace = async (id) => {
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
  return results;
};
