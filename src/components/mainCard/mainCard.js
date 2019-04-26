import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Images from '../../img/images';
import './styles.scss';

const MainCard = ({
  constructorId, name, url, title
}) => (
  <Link to={`/${url}`} className={'main-card'}>
    <img src={Images.teams_big[constructorId]} alt={name} />
    <div className={'main-card__title'}>{title}</div>
  </Link>
);

MainCard.propTypes = {
  constructorId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MainCard;
