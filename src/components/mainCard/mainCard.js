import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default ({
  constructorId,
  name,
  url,
  title
}) => (
  <Link to={`/${url}`} className={'main-card'}>
    <img
      src={`/src/img/teams_big/${constructorId}.jpg`}
      alt={`${name}`}
    />
    <div className={'main-card__title'}>
      {title}
    </div>
  </Link>
);
