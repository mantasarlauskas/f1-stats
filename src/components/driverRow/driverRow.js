import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StandingsRow from '../standingsRow';
import { driverSelector, driverTeamSelector } from '../../selectors/api';

const DriverRow = ({ driver, team, ...data }) => (
  <StandingsRow isDriver driver={driver} team={team} {...data} />
);

DriverRow.propTypes = {
  driver: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired
};

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(DriverRow);
