import { connect } from 'react-redux';
import { teamStandingsSelector, teamSelector, teamDriversSelector } from '../../selectors/api';
import Team from './team';

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  team: teamSelector(state, id),
  teamStandings: teamStandingsSelector(state, id),
  drivers: teamDriversSelector(state, id),
  isLoading: state.api.isLoading
});

export default connect(mapStateToProps)(Team);
