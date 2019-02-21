import React from 'react';
import './style.scss';

export default ({ Icon, title, text }) => (
  <div className={'main-info-section'}>
    <Icon className={'main-info-section__icon'} />
    <h3 className={'main-info-section__title'}>
      {title}
    </h3>
    <p className={'main-info-section__text'}>
      {text}
    </p>
  </div>
);
