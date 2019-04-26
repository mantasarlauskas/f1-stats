import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import './styles.scss';

const Loading = ({ size }) => (
  <div className={'loading'}>
    <ClipLoader sizeUnit={'px'} size={size} color={'red'} loading />
    <div className={'loading__text'}>Waiting...</div>
  </div>
);

Loading.propTypes = {
  size: PropTypes.number.isRequired
};

export default Loading;
