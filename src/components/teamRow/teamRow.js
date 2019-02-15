import React from 'react';
import { connect } from 'react-redux';
import { teamSelector } from '../../selectors/api';
import StandingsRow from '../standingsRow';

const TeamRow = ({ team, ...data }) => (
  <StandingsRow
    isDriver={false}
    team={team}
    {...data}
  />
);

const mapStateToProps = (state, { constructorId }) => ({
  team: teamSelector(state, constructorId)
});

export default connect(mapStateToProps)(TeamRow);