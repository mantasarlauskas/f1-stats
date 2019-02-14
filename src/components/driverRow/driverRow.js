import React from 'react';
import { connect } from 'react-redux';
import {
  driverSelector,
  driverStandingsSelector,
  teamSelector
} from '../../selectors/api';
import './styles.scss';

const DriverRow = ({
  driver: { givenName, familyName },
  team: { constructorId, name },
  driverStandings: { points, position }
}) => (
  <div className={'driver-row'}>
    <div className={'driver-row__number-wrapper'}>
      <span className={'driver-row__number'}>
        {position}
      </span>
      <span className={`driver-row__number-color background-color-${constructorId}`}/>
    </div>
    <div className={'driver-row__name'}>
      {givenName}
      <span className={'driver-row__name--bold'}>
        {familyName}
      </span>
    </div>
    <div className={'driver-row__team'}>
      {name}
    </div>
    <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`}/>
    <div className={'driver-row__points'}>
      {points}
    </div>
  </div>
);

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  driverStandings: driverStandingsSelector(state, driverId),
  team: teamSelector(state, driverId),
});

export default connect(mapStateToProps)(DriverRow);
