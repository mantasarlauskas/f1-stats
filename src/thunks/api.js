import axios from 'axios';
import { setDrivers, setTeams } from '../actions/api';

export const fetchData = () => dispatch => {
  dispatch(getDrivers());
  dispatch(getTeams());
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