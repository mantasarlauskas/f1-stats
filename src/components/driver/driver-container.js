import { connect } from 'react-redux';
import { driverSelector, driverStandingsSelector, driverTeamSelector } from '../../selectors/api';
import Driver from './driver';

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  driver: driverSelector(state, id),
  driverStandings: driverStandingsSelector(state, id),
  team: driverTeamSelector(state, id),
  isLoading: state.api.isLoading,
  id
});

export default connect(mapStateToProps)(Driver);
