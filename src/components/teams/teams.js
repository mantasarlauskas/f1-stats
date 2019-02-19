import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../loading';
import './styles.scss';

class Teams extends Component {
  renderRow = ({ constructorId, name }) => {
    return (
      <Link
        to={`/team/${constructorId}`}
        className={'teams__item'}
        key={constructorId}
      >
        <div className={'teams__item__title'}>
          {name}
        </div>
        <div className={'teams__item__image'}>
          <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`} />
        </div>
      </Link>
    )
  };

  render() {
    const { teams, isLoading } = this.props;
    if (!isLoading) {
      return (
        <Fragment>
          <div className={'title'}>
            Teams
          </div>
          <div className={'teams'}>
            {teams.map(this.renderRow)}
          </div>
        </Fragment>
      )
    } else {
      return (
        <div className={'container'}>
          <Loading />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(Teams);