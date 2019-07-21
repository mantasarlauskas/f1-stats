import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FavouriteDriver from '../favouriteDriver';
import FavouriteTeam from '../favouriteTeam';
import Loading from '../loading';

const Favourites = ({ drivers, teams, isLoading }) => (isLoading ? (
  <div className={'container'}>
    <Loading size={100} />
  </div>
) : (
  <Fragment>
    <div className={'title'}>Favourite drivers</div>
    {drivers.length > 0 ? (
      drivers.map(id => <FavouriteDriver key={id} id={id} />)
    ) : (
      <div className={'empty'}>Favourite drivers list is empty</div>
    )}
    <div className={'title'}>Favourite teams</div>
    {teams.length > 0 ? (
      teams.map(id => <FavouriteTeam key={id} id={id} />)
    ) : (
      <div className={'empty'}>Favourite teams list is empty</div>
    )}
  </Fragment>
));

Favourites.propTypes = {
  drivers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  teams: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Favourites;
