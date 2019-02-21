import React from 'react';
import { connect } from 'react-redux';
import MainCard from '../mainCard';
import Loading from '../loading';
import './styles.scss';

const cards = [
  {
    title: 'Teams',
    url: 'teams'
  },
  {
    title: 'Drivers',
    url: 'drivers'
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
    title: 'Results',
    url: 'results'
  },
  {
    title: 'Schedule',
    url: 'schedule'
  }
];

const MainCards = ({ teams, isLoading }) => {
  if (!isLoading && teams.length > 0) {
    return (
      <div className={'main-cards'}>
        {cards.map(({ title, url }, index) => (
          <MainCard
            key={title}
            title={title}
            url={url}
            constructorId={teams[index].constructorId}
            name={teams[index].name}
          />
        ))}
      </div>
    );
  }
  return <Loading />;
};

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(MainCards);
