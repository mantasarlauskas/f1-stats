import { connect } from 'react-redux';
import DriverStandings from './driverStandings';

const mapStateToProps = ({ api: { driverStandings, isLoading } }) => ({
  driverStandings,
  isLoading
});

export default connect(mapStateToProps)(DriverStandings);
