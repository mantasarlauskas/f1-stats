import { connect } from 'react-redux';
import { favouriteDriverSelector } from '../../selectors/favourites';
import { driverTeamSelector } from '../../selectors/api';
import { addFavouriteDriver, removeFavouriteDriver } from '../../actions/favourites';
import DriverInfo from './driverInfo';

const mapStateToProps = (state, { id }) => ({
  isFavourite: !!favouriteDriverSelector(state, id),
  team: driverTeamSelector(state, id)
});

const mapDispatchToProps = {
  addFavouriteDriver,
  removeFavouriteDriver
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverInfo);
