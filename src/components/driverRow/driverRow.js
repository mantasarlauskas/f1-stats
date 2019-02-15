import React from 'react';
import { connect } from 'react-redux';
import StandingsRow from '../standingsRow';
import {
  driverSelector,
  driverTeamSelector
} from '../../selectors/api';

const DriverRow = ({ driver, team, ...data }) => (
  <StandingsRow
    isDriver={true}
    driver={driver}
    team={team}
    {...data}
  />
);

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  team: driverTeamSelector(state, driverId),
});

export default connect(mapStateToProps)(DriverRow);
