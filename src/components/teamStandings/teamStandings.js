import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import TeamRow from '../teamRow';
import Loading from '../loading';

const TeamStandings = ({ teamStandings, isLoading }) => {
  if (!isLoading) {
    return (
      <Fragment>
        <div className={'title'}>
          2018 teams championship
        </div>
        <div className={'standings'}>
          {teamStandings.map(team => <TeamRow key={team.constructorId} {...team} />)}
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className={'container'}>
        <Loading />
      </div>
    );
  }
};

const mapStateToProps = ({ api: { teamStandings, isLoading } }) => ({
  teamStandings,
  isLoading
});

export default connect(mapStateToProps)(TeamStandings);