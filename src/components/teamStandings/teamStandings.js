import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TeamRow from '../teamRow';

const teamStandings = ({ teamStandings }) => (
  <Fragment>
    <div className={'title'}>
      2018 teams championship
    </div>
    <div className={'standings'}>
      {teamStandings.map(team => <TeamRow key={team.constructorId} {...team} />)}
    </div>
  </Fragment>
);

const mapStateToProps = ({ api: { teamStandings } }) => ({
  teamStandings
});

export default connect(mapStateToProps)(teamStandings);