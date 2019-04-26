import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { teamSelector } from '../../selectors/api';
import StandingsRow from '../standingsRow';

const TeamRow = ({ team, ...data }) => (
  <StandingsRow isDriver={false} team={team} {...data} />
);

TeamRow.propTypes = {
  team: PropTypes.object.isRequired
};

const mapStateToProps = (state, { constructorId }) => ({
  team: teamSelector(state, constructorId)
});

export default connect(mapStateToProps)(TeamRow);
