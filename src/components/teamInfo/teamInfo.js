import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './styles.scss';

const renderStats = (title, value) => (
  <div className={'team__stats__row'}>
    <b>
      {`${title}: `}
    </b>
    {value}
  </div>
);

const TeamInfo = ({
  constructorId,
  name,
  nationality,
  points,
  position,
  wins,
  drivers,
  isFavourite,
  addFavouriteTeam,
  removeFavouriteTeam,
}) => (
  <div className={'team'}>
    <div className={'team__info'}>
      <div className={'team__info__content'}>
        <div className={'team__name'}>{name}</div>
        <div className={'team__stats'}>
          {renderStats('Points', points)}
          {renderStats('Championship position', position)}
          {renderStats('Wins this season', wins)}
          {renderStats('Nationality', nationality)}
        </div>
        <div className={'team__favourite'}>
          <button
            className={`favourite-button ${isFavourite ? 'favourite-button--remove' : ''}`}
            type={'button'}
            onClick={
              !isFavourite
                ? () => addFavouriteTeam(constructorId)
                : () => removeFavouriteTeam(constructorId)
            }
          >
            {!isFavourite ? 'Add to favourites' : 'Remove from favourites'}
          </button>
        </div>
      </div>
    </div>
    {drivers.slice().reverse().map(({
      givenName, familyName, driverId, permanentNumber
    }) => (
      <Link className={'team__driver'} key={driverId} to={`/driver/${driverId}`}>
        <img
          className={'team__driver__image'}
          src={`${photoUrl}/drivers/${driverId}.jpg`}
          alt={driverId}
        />
        <div className={'team__driver__number'}>
          {permanentNumber}
        </div>
        <div className={'team__driver__name'}>{`${givenName} ${familyName}`}</div>
      </Link>
    ))}
    <div className={`team__color background-color-${constructorId}`} />
    <div className={'team__image'}>
      <img src={`${photoUrl}/teams_big/${constructorId}.jpg`} alt={name} />
    </div>
  </div>
);

TeamInfo.propTypes = {
  constructorId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      givenName: PropTypes.string.isRequired,
      familyName: PropTypes.string.isRequired,
      driverId: PropTypes.string.isRequired
    })
  ).isRequired,
  isFavourite: PropTypes.bool.isRequired,
  addFavouriteTeam: PropTypes.func.isRequired,
  removeFavouriteTeam: PropTypes.func.isRequired
};

export default TeamInfo;
