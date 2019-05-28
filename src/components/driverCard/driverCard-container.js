import { connect } from 'react-redux';
import { driverTeamSelector } from '../../selectors/api';
import { hideAdditionalMenu } from '../../actions/additionalMenu';
import DriverCard from './driverCard';

const mapStateToProps = (state, { driverId }) => ({
  team: driverTeamSelector(state, driverId)
});

const mapDispatchToProps = {
  hideAdditionalMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverCard);
