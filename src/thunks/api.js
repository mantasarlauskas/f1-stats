import axios from 'axios';
import {
  setDrivers,
  setTeams,
  setDriverStandings,
  setTeamStandings,
  toggleLoading
} from '../actions/api';

const parseDriverStandings = data => data.map(({
  Constructors,
  Driver: { driverId },
  ...restData
}) => ({
  constructorId: Constructors[0].constructorId,
  driverId,
  ...restData
}));

const parseTeamStandings = data => data.map(({
  Constructor: { constructorId },
  ...restData
}) => ({
  constructorId,
  ...restData
}));

const getDrivers = () => async (dispatch) => {
  const {
    data: { MRData: { DriverTable: { Drivers } } }
  } = await axios('https://ergast.com/api/f1/2018/drivers.json');
  dispatch(setDrivers(Drivers));
};

const getTeams = () => async (dispatch) => {
  const {
    data: { MRData: { ConstructorTable: { Constructors } } }
  } = await axios('https://ergast.com/api/f1/2018/constructors.json');
  dispatch(setTeams(Constructors));
};

const getDriverStandings = () => async (dispatch) => {
  const {
    data: { MRData: { StandingsTable: { StandingsLists } } }
  } = await axios('https://ergast.com/api/f1/2018/driverStandings.json');
  dispatch(
    setDriverStandings(parseDriverStandings(StandingsLists[0].DriverStandings))
  );
};

const getTeamStandings = () => async (dispatch) => {
  const {
    data: { MRData: { StandingsTable: { StandingsLists } } }
  } = await axios('https://ergast.com/api/f1/2018/constructorStandings.json');
  dispatch(
    setTeamStandings(parseTeamStandings(StandingsLists[0].ConstructorStandings))
  );
};

export default () => async (dispatch) => {
  dispatch(toggleLoading());
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  await dispatch(getTeamStandings());
  dispatch(toggleLoading());
};
