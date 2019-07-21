import { connect } from 'react-redux';
import { removeFavouriteTeam } from '../../actions/favourites';
import { teamSelector } from '../../selectors/api';
import FavouriteTeam from './favouriteTeam';

const mapStateToProps = (state, { id }) => ({
  team: teamSelector(state, id)
});

const mapDispatchToProps = {
  removeFavouriteTeam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteTeam);
