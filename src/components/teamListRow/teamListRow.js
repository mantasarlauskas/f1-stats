import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Images from '../../img/images';

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
      <img src={Images.teams[constructorId]} alt={name} />
    </div>
  </Link>
);
