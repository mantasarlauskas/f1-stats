import React from 'react';
import PropTypes from 'prop-types';
import { photoUrl } from '../../services/api';
import './styles.scss';

const renderInfo = (title, value) => (
  <div className={'driver__info__row'}>
    <b>{`${title}:`}</b>
    &nbsp;
    {value}
  </div>
);

const DriverInfo = ({
  position,
  wins,
  points,
  name,
  givenName,
  familyName,
  driverId,
  permanentNumber,
  dateOfBirth,
  nationality,
  isFavourite,
  addFavouriteDriver,
  removeFavouriteDriver,
  team: { constructorId }
}) => (
  <div className={'driver'}>
    <img className={'driver__image'} src={`${photoUrl}/drivers/${driverId}.jpg`} alt={driverId} />
    <span className={`driver__color background-color-${constructorId}`} />
    <div className={'driver__section'}>
      <div className={'driver__section__content'}>
        <div className={'driver__name'}>{`${givenName} ${familyName}`}</div>
        <div className={'driver__info'}>
          {renderInfo('Team', name)}
          {renderInfo('Number', permanentNumber)}
          {renderInfo('Points', points)}
          {renderInfo('Championship position', position)}
          {renderInfo('Wins this season', wins)}
          {renderInfo('Nationality', nationality)}
          {renderInfo('Date of birth', dateOfBirth)}
        </div>
        <button
          className={`favourite-button ${isFavourite ? 'favourite-button--remove' : ''}`}
          onClick={
            !isFavourite
              ? () => addFavouriteDriver(driverId)
              : () => removeFavouriteDriver(driverId)
          }
          type={'button'}
        >
          {!isFavourite ? 'Add to favourites' : 'Remove from favourites'}
        </button>
      </div>
    </div>
  </div>
);

DriverInfo.propTypes = {
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  driverId: PropTypes.string.isRequired,
  permanentNumber: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  addFavouriteDriver: PropTypes.func.isRequired,
  removeFavouriteDriver: PropTypes.func.isRequired,
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired
  }).isRequired
};

export default DriverInfo;
