import axios from 'axios';
import { setDrivers, setTeams, setStandings } from '../actions/api';

export const fetchData = () => dispatch => {
  dispatch(getDrivers());
  dispatch(getTeams());
  dispatch(getStandings());
};

export const getDrivers = () => dispatch => {
  axios
    ('http://ergast.com/api/f1/2018/drivers.json')
    .then(({ data: { MRData: { DriverTable: { Drivers } }} }) =>
      dispatch(setDrivers(Drivers))
    );
};

export const getTeams = () => dispatch => {
  axios
    ('http://ergast.com/api/f1/2018/constructors.json')
    .then(({ data: { MRData: { ConstructorTable: { Constructors } }} }) =>
      dispatch(setTeams(Constructors))
    );
};

export const getStandings = () => dispatch => {
  axios
    ('http://ergast.com/api/f1/2018/driverStandings.json')
    .then(({ data: { MRData: { StandingsTable: { StandingsLists } } }}) =>
      dispatch(setStandings(parseStandings(StandingsLists[0].DriverStandings)))
    );
};

const parseStandings = data => data.map(({ Constructors, Driver: { driverId }, ...data }) => ({
  constructorId: Constructors[0].constructorId,
  driverId,
  ...data
}));

