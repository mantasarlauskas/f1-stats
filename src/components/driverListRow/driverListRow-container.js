import { connect } from 'react-redux';
import { driverTeamSelector } from '../../selectors/api';
import DriverListRow from './driverListRow';

const mapStateToProps = (state, { driverId }) => ({
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(DriverListRow);
