import { connect } from 'react-redux';
import Favourites from './favourites';

const mapStateToProps = ({ favourites: { drivers, teams }, api: { isLoading } }) => ({
  drivers,
  teams,
  isLoading
});

export default connect(mapStateToProps)(Favourites);
