import React from 'react';
import PropTypes from 'prop-types';
import StandingsRow from '../standingsRow';

const DriverRow = ({ driver, team, ...data }) => (
  <StandingsRow isDriver driver={driver} team={team} {...data} />
);

DriverRow.propTypes = {
  driver: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired
};

export default DriverRow;
