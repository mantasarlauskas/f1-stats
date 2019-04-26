import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {
  teamStandingsSelector,
  teamSelector,
  teamDriversSelector
} from '../../selectors/api';
import Images from '../../img/images';
import Loading from '../loading';
import './styles.scss';

class Team extends Component {
  renderStats = (title, value) => (
    <Fragment>
      <div className={'team__stats__title'}>{title}</div>
      <div className={'team__stats__value'}>{value}</div>
    </Fragment>
  );

  render() {
    const {
      team, teamStandings, isLoading, drivers
    } = this.props;
    if (
      Object.entries(team).length !== 0
      && Object.entries(teamStandings).length !== 0
      && drivers.length > 0
    ) {
      const { constructorId, name, nationality } = team;
      const { points, position, wins } = teamStandings;
      return (
        <div className={'container'}>
          <div className={'team'}>
            <div className={'team__info'}>
              <div className={'team__name'}>{name}</div>
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
              <img src={Images.teams_big[constructorId]} alt={name} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={'container'}>
        {isLoading ? (
          <Loading size={100} />
        ) : (
          <div className={'empty'}>Team does not exist</div>
        )}
      </div>
    );
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
  teamStandings: PropTypes.object.isRequired,
  drivers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  team: teamSelector(state, id),
  teamStandings: teamStandingsSelector(state, id),
  drivers: teamDriversSelector(state, id),
  isLoading: state.api.isLoading
});

export default connect(mapStateToProps)(Team);
