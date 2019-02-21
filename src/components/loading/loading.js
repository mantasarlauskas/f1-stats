import React from 'react';
import { ClipLoader } from 'react-spinners';
import './styles.scss';

export default () => (
  <div className={'loading'}>
    <ClipLoader
      sizeUnit={'px'}
      size={100}
      color={'red'}
      loading
    />
    <div className={'loading__text'}>
      Waiting...
    </div>
  </div>
);
