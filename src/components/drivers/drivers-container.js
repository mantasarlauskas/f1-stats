import { connect } from 'react-redux';
import Drivers from './drivers';

const mapStateToProps = ({ api: { drivers, isLoading } }) => ({
  drivers,
  isLoading
});

export default connect(mapStateToProps)(Drivers);
