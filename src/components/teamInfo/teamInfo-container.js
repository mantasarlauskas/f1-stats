import { connect } from 'react-redux';
import { favouriteTeamSelector } from '../../selectors/favourites';
import { addFavouriteTeam, removeFavouriteTeam } from '../../actions/favourites';
import TeamInfo from './teamInfo';

const mapStateToProps = (state, { id }) => ({
  isFavourite: !!favouriteTeamSelector(state, id),
});

const mapDispatchToProps = {
  addFavouriteTeam,
  removeFavouriteTeam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamInfo);
