import React from 'react';
import './styles.scss';
import { ClipLoader } from 'react-spinners';

export default () => (
  <div className={'loading'}>
    <ClipLoader
      sizeUnit={'px'}
      size={100}
      color={'red'}
      loading={true}
    />
    <div className={'loading__text'}>
      Waiting...
    </div>
  </div>
)