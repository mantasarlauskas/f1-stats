import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { hideAdditionalMenu } from '../../actions/additionalMenu';
import { connect } from 'react-redux';

const TeamCard = ({ name, constructorId, onRouteChange }) => (
  <Link
    onClick={onRouteChange}
    to={`/team/${constructorId}`}
    className={'team-card'}
  >
    <div className={'team-card__title'}>
      {name}
    </div>
    <div className={'team-card__logo'}>
      <span className={`team-card__logo__color background-color-${constructorId}`} />
      <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`}/>
    </div>
  </Link>
);

const mapDispatchToProps = dispatch => ({
  onRouteChange: () => dispatch(hideAdditionalMenu())
});

export default connect(null, mapDispatchToProps)(TeamCard);