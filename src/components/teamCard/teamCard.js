import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './style.scss';

const TeamCard = ({ name, constructorId, hideAdditionalMenu }) => (
  <Link
    onClick={hideAdditionalMenu}
    to={`/team/${constructorId}`}
    className={`team-card border-color-${constructorId}`}
  >
    <div className={'team-card__title'}>{name}</div>
    <div className={'team-card__logo'}>
      <span className={`team-card__logo__color background-color-${constructorId}`} />
      <img src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
    </div>
  </Link>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  constructorId: PropTypes.string.isRequired,
  hideAdditionalMenu: PropTypes.func.isRequired
};

export default TeamCard;
