import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../mainCard';
import Loading from '../loading';
import './styles.scss';

const cards = [
  {
    title: 'Results',
    url: 'results'
  },
  {
    title: 'Schedule',
    url: 'schedule'
  },
  {
    title: 'Driver Standings',
    url: 'driver-standings'
  },
  {
    title: 'Team Standings',
    url: 'team-standings'
  },
  {
    title: 'Drivers',
    url: 'drivers'
  },
  {
    title: 'Teams',
    url: 'teams'
  }
];

const MainCards = ({ teams, isLoading }) => (
  <div className={'main-cards'}>
    {isLoading ? (
      <Loading size={100} />
    ) : (
      cards.map(({ title, url }, index) => (
        <MainCard
          key={title}
          title={title}
          url={url}
          constructorId={teams[index].constructorId}
          name={teams[index].name}
        />
      ))
    )}
  </div>
);

MainCards.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      constructorId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MainCards;
