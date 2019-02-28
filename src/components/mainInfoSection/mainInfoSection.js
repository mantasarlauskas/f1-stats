import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MainInfoSection = ({ Icon, title, text }) => (
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

MainInfoSection.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MainInfoSection;
