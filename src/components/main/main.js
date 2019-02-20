import React, { Component } from 'react';
import MainImage from '../mainImage';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { FaFlagCheckered, FaCarSide } from 'react-icons/fa';
import './styles.scss';

class Main extends Component {
  render() {
    return (
      <div className={'main'}>
        <MainImage />
        <div className={'main-info'}>
          <div className={'main-info__section'}>
            <FaFlagCheckered className={'main-info__section__icon'} />
            <h3 className={'main-info__section__title'}>
              Results
            </h3>
            <p className={'main-info__section__text'}>
              Race, qualifying results and pit stop times from every race in the calendar
            </p>
          </div>
          <div className={'main-info__section'}>
            <GiFullMotorcycleHelmet className={'main-info__section__icon'} />
            <h3 className={'main-info__section__title'}>
              Standings
            </h3>
            <p className={'main-info__section__text'}>
              Live team and driver standings updated after every session
            </p>
          </div>
          <div className={'main-info__section'}>
            <FaCarSide className={'main-info__section__icon'} />
            <h3 className={'main-info__section__title'}>
              Schedule
            </h3>
            <p className={'main-info__section__text'}>
              Forgot where and when the next race will be? We got you covered!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;