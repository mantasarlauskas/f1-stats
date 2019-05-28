import React from 'react';
import MainInfo from '../mainInfo';
import MainImage from '../mainImage';
import MainCards from '../mainCards';

export default () => (
  <div className={'main'}>
    <MainImage />
    <MainInfo />
    <MainCards />
  </div>
);
