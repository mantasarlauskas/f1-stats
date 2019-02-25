import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from '../loading';
import Images from '../../img/images';
import {
  driverSelector,
  driverStandingsSelector,
  driverTeamSelector
} from '../../selectors/api';
import './styles.scss';

class Driver extends Component {
  renderInfo = (title, value) => (
    <Fragment>
      <div className={'driver__info__title'}>
        {title}
      </div>
      <div className={'driver__info__value'}>
        {value}
      </div>
    </Fragment>
  );

  render() {
    const {
      driver,
      driverStandings,
      team,
      isLoading
    } = this.props;
    if (driver && driverStandings && team) {
      const { position, wins, points } = driverStandings;
      const { name } = team;
      const {
        givenName,
        familyName,
        driverId,
        permanentNumber,
        dateOfBirth,
        nationality
      } = driver;
      return (
        <div className={'container'}>
          <div className={'driver'}>
            <div className={'driver__image'}>
              <img
                src={Images.drivers[driverId]}
                alt={driverId}
              />
            </div>
            <div className={'driver__section'}>
              <div className={'driver__name'}>
                {`${givenName} ${familyName}`}
              </div>
              <div className={'driver__info'}>
                {this.renderInfo('Team', name)}
                {this.renderInfo('Number', permanentNumber)}
                {this.renderInfo('Points', points)}
                {this.renderInfo('Championship position', position)}
                {this.renderInfo('Wins', wins)}
                {this.renderInfo('Nationality', nationality)}
                {this.renderInfo('Date of birth', dateOfBirth)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={'container'}>
        {isLoading ? <Loading /> : (
          <div className={'empty'}>
            Driver does not exist
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (state, { match: { params: { id } } }) => ({
  driver: driverSelector(state, id),
  driverStandings: driverStandingsSelector(state, id),
  team: driverTeamSelector(state, id),
  isLoading: state.api.isLoading
});

export default connect(mapDispatchToProps)(Driver);
