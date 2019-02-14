import axios from 'axios';
import {
  setDrivers,
  setTeams,
  setDriverStandings,
  toggleLoading
} from '../actions/api';

export const fetchData = () => async dispatch => {
  dispatch(toggleLoading());
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  dispatch(toggleLoading());
};

export const getDrivers = () => async dispatch => {
  const { data: { MRData: { DriverTable: { Drivers } } } } =
    await axios('http://ergast.com/api/f1/2018/drivers.json');
  dispatch(setDrivers(Drivers));
};

export const getTeams = () => async dispatch => {
  const { data: { MRData: { ConstructorTable: { Constructors } } } } =
    await axios('http://ergast.com/api/f1/2018/constructors.json');
  dispatch(setTeams(Constructors));
};

export const getDriverStandings = () => async dispatch => {
  const { data: { MRData: { StandingsTable: { StandingsLists } } } } =
    await axios('http://ergast.com/api/f1/2018/driverStandings.json');
  dispatch(setDriverStandings(parseDriverStandings(StandingsLists[0].DriverStandings)));
};

const parseDriverStandings = data => data.map(({ Constructors, Driver: { driverId }, ...data }) => ({
  constructorId: Constructors[0].constructorId,
  driverId,
  ...data
}));

