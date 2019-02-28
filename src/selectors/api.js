import { createSelector } from 'reselect';

const driversSelector = ({ api: { drivers } }) => drivers;
const teamsSelector = ({ api: { teams } }) => teams;
const teamsStandingsSelector = ({ api: { teamStandings } }) => teamStandings;
const idSelector = (state, id) => id;
const driversStandingsSelector = ({
  api: { driverStandings }
}) => driverStandings;

export const driverSelector = createSelector(
  driversSelector, idSelector,
  (drivers, id) => drivers.find(({ driverId }) => driverId === id) || {}
);

export const teamSelector = createSelector(
  teamsSelector, idSelector,
  (teams, id) => teams.find(({ constructorId }) => constructorId === id) || {}
);

export const driverStandingsSelector = createSelector(
  driversStandingsSelector, idSelector,
  (standings, id) => standings.find(({ driverId }) => driverId === id) || {}
);

export const teamStandingsSelector = createSelector(
  teamsStandingsSelector, idSelector,
  (standings, id) => standings.find(({
    constructorId
  }) => constructorId === id) || {}
);

export const teamDriversSelector = createSelector(
  driversStandingsSelector, driversSelector, idSelector,
  (standings, drivers, id) => {
    if (standings.length > 0) {
      const driverStandings = standings.filter(({
        constructorId
      }) => constructorId === id);
      if (driverStandings.length > 0) {
        const [
          { driverId: firstDriver },
          { driverId: secondDriver }
        ] = driverStandings;
        return drivers.filter(({
          driverId
        }) => driverId === firstDriver || driverId === secondDriver);
      }
      return [];
    }
    return [];
  }
);

export const driverTeamSelector = createSelector(
  teamsSelector, driverStandingsSelector,
  (teams, standings) => teams.find(({
    constructorId
  }) => standings && constructorId === standings.constructorId) || {}
);
