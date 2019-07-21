import { connect } from 'react-redux';
import { removeFavouriteDriver } from '../../actions/favourites';
import { driverSelector, driverTeamSelector } from '../../selectors/api';
import FavouriteDriver from './favouriteDriver';

const mapStateToProps = (state, { id }) => ({
  driver: driverSelector(state, id),
  team: driverTeamSelector(state, id)
});

const mapDispatchToProps = {
  removeFavouriteDriver
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteDriver);
