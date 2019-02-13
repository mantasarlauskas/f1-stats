import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Standings extends Component {
  renderDriver = ({ driverId, constructorId, points, position }) => {
    const { drivers, teams } = this.props;
    const { givenName, familyName } = drivers.find(driver => driverId === driver.driverId);
    const { name } = teams.find(team => constructorId === team.constructorId);
    return (
      <div key={driverId} className={'driver'}>
        <div className={'driver__number-wrapper'}>
            <span className={'driver__number'}>
              {position}
            </span>
          <span className={`background-color-${constructorId} driver__number-color`}/>
        </div>
        <div className={'driver__name'}>
          {givenName}
          <span className={'driver__name--bold'}>{familyName}</span>
        </div>
        <div className={'driver__team'}>
          {name}
        </div>
        <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`}/>
        <div className={'driver__points'}>
          {points}
        </div>
      </div>
    )
  };

  render() {
    const { standings } = this.props;
    return (
      <Fragment>
        <div className={'title'}>
          2018 drivers championship
        </div>
        <div className={'drivers'}>
          {standings.map(this.renderDriver)}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ api: { standings, drivers, teams } }) => ({
  standings,
  drivers,
  teams
});

export default connect(mapStateToProps)(Standings);