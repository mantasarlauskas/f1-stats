import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TeamListRow from '../teamListRow';
import Loading from '../loading';
import './styles.scss';

const Teams = ({ teams, isLoading }) => {
  if (!isLoading) {
    return (
      <Fragment>
        <div className={'title'}>
          Teams
        </div>
        <div className={'teams'}>
          {teams.map(row => <TeamListRow key={row.constructorId} {...row} />)}
        </div>
      </Fragment>
    );
  }
  return (
    <div className={'container'}>
      <Loading />
    </div>
  );
};

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(Teams);
