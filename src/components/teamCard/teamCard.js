import React from 'react';
import './style.scss';

export default ({ name, constructorId }) => (
  <div className={'team-card'}>
    <div className={'team-card__title'}>
      {name}
    </div>
    <div className={'team-card__logo'}>
      <span className={`team-card__logo__color background-color-${constructorId}`} />
      <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`}/>
    </div>
  </div>
);

