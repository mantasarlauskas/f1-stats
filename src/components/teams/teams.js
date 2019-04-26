import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TeamListRow from '../teamListRow';
import Loading from '../loading';
import './styles.scss';

const Teams = ({ teams, isLoading }) => {
  if (!isLoading) {
    return (
      <Fragment>
        <div className={'title'}>Teams</div>
        <div className={'teams'}>
          {teams.map(row => (
            <TeamListRow key={row.constructorId} {...row} />
          ))}
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

Teams.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(Teams);
