import React, { Component, Fragment } from 'react';
import { teamStandingsSelector, teamSelector, teamDriversSelector } from '../../selectors/api';
import Loading from '../loading';
import { connect } from 'react-redux';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import './styles.scss';

class Team extends Component {
  renderStats = (title, value) => {
    return (
      <Fragment>
        <div className={'team__stats__title'}>
          {title}
        </div>
        <div className={'team__stats__value'}>
          {value}
        </div>
      </Fragment>
    )
  };

  render() {
    const { team, teamStandings, isLoading, drivers } = this.props;
    if (team && teamStandings && drivers.length > 0) {
      const { constructorId, name, nationality } = team;
      const { points, position, wins } = teamStandings;
      return (
        <div className={'container'}>
          <div className={'team'}>
            <div className={'team__info'}>
              <div className={'team__name'}>
                {name}
              </div>
              {drivers.map(({ givenName, familyName, driverId }) => (
                <div key={driverId} className={'team__driver'}>
                  <GiFullMotorcycleHelmet />
                  <div className={'team__driver__name'}>
                    {`${givenName} ${familyName}`}
                  </div>
                </div>
              ))}
              <div className={'team__stats'}>
                {this.renderStats('Championship position', position)}
                {this.renderStats('Points', points)}
                {this.renderStats('Wins', wins)}
                {this.renderStats('Nationality', nationality)}
              </div>
            </div>
            <div className={`team__color background-color-${constructorId}`} />
            <div className={'team__image'}>
              <img src={`/src/img/teams_big/${constructorId}.jpg`} alt={`${name}`} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={'container'}>
          {isLoading ? <Loading/> : (
            <div className={'empty'}>
              Team does not exist
            </div>
          )}
        </div>
      )
    }
  }
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  team: teamSelector(state, id),
  teamStandings: teamStandingsSelector(state, id),
  drivers: teamDriversSelector(state, id),
  isLoading: state.api.isLoading
});

export default connect(mapStateToProps)(Team);