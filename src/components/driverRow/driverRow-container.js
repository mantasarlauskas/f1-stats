import { connect } from 'react-redux';
import { driverSelector, driverTeamSelector } from '../../selectors/api';
import DriverRow from './driverRow';

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(DriverRow);
