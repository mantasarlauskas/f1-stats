import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { FaFlagCheckered, FaCarSide } from 'react-icons/fa';
import MainInfoSection from '../mainInfoSection';
import './style.scss';

const sections = [
  {
    icon: FaFlagCheckered,
    title: 'Results',
    text: 'Race, qualifying results and pit stop'
      + 'times from every race in the calendar'
  },
  {
    icon: GiFullMotorcycleHelmet,
    title: 'Standings',
    text: 'Live team and driver standings updated after every session'
  },
  {
    icon: FaCarSide,
    title: 'Schedule',
    text: 'Forgot where and when the next race will be? We got you covered!'
  }
];

export default () => (
  <div className={'main-info'}>
    {sections.map(({ icon, title, text }) => (
      <MainInfoSection key={title} Icon={icon} title={title} text={text} />))}
  </div>
);
