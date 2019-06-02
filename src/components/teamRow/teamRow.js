import React from 'react';
import PropTypes from 'prop-types';
import StandingsRow from '../standingsRow';

const TeamRow = ({ team, ...data }) => <StandingsRow isDriver={false} team={team} {...data} />;

TeamRow.propTypes = {
  team: PropTypes.object.isRequired
};

export default TeamRow;
