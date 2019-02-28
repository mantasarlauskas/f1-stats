import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
          {teamStandings.map(team => (
            <TeamRow key={team.constructorId} {...team} />))}
        </div>
      </Fragment>
    );
  }
  return (
    <div className={'container'}>
      <Loading size={100} />
    </div>
  );
};

TeamStandings.propTypes = {
  teamStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ api: { teamStandings, isLoading } }) => ({
  teamStandings,
  isLoading
});

export default connect(mapStateToProps)(TeamStandings);
