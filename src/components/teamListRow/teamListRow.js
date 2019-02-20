import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default ({ constructorId, name }) => (
  <Link
    to={`/team/${constructorId}`}
    className={'team-list-row'}
    key={constructorId}
  >
    <div className={'team-list-row__title'}>
      {name}
    </div>
    <div className={'team-list-row__image'}>
      <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`} />
    </div>
  </Link>
)