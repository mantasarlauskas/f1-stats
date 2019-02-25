import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../img/images';
import './styles.scss';

export default ({
  constructorId,
  name,
  url,
  title
}) => (
  <Link to={`/${url}`} className={'main-card'}>
    <img
      src={Images.teams_big[constructorId]}
      alt={name}
    />
    <div className={'main-card__title'}>
      {title}
    </div>
  </Link>
);
