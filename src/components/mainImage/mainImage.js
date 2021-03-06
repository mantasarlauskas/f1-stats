import React from 'react';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './styles.scss';

export default () => (
  <div className={'main-image'}>
    <img src={`${photoUrl}/mercedes.jpg`} alt={'Mercedes'} />
    <h1 className={'main-image__title'}>F1 stats</h1>
    <Link to={'/results'} className={'main-image__button'}>
      Results
    </Link>
  </div>
);
