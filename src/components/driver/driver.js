import React from 'react';
import { connect } from 'react-redux';
import Loading from '../loading';
import {
  driverSelector,
  driverStandingsSelector,
  teamSelector
} from '../../selectors/api';
import './styles.scss';

const Driver = ({ driver, driverStandings, team, isLoading }) => {
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
            <img src={`/src/img/drivers/${driverId}.png`} alt={`${driverId}`}/>
          </div>
          <div className={'driver__section'}>
            <div className={'driver__name'}>
              {`${givenName} ${familyName}`}
            </div>
            <div className={'driver__info'}>
              <div className={'driver__info__title'}>
                Team
              </div>
              <div className={'driver__info__value'}>
                {name}
              </div>
              <div className={'driver__info__title'}>
                Number
              </div>
              <div className={'driver__info__value'}>
                {permanentNumber}
              </div>
              <div className={'driver__info__title'}>
                Points
              </div>
              <div className={'driver__info__value'}>
                {points}
              </div>
              <div className={'driver__info__title'}>
                Championship position
              </div>
              <div className={'driver__info__value'}>
                {position}
              </div>
              <div className={'driver__info__title'}>
                Wins
              </div>
              <div className={'driver__info__value'}>
                {wins}
              </div>
              <div className={'driver__info__title'}>
                Nationality
              </div>
              <div className={'driver__info__value'}>
                {nationality}
              </div>
              <div className={'driver__info__title'}>
                Date of birth
              </div>
              <div className={'driver__info__value'}>
                {dateOfBirth}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={'container'}>
        {isLoading ? <Loading/> : (
          <div className={'driver__empty'}>
            Driver does not exist
          </div>
        )}
      </div>
    )
  }
};

const mapDispatchToProps = (state, { match: { params: { id } } }) => ({
  driver: driverSelector(state, id),
  driverStandings: driverStandingsSelector(state, id),
  team: teamSelector(state, id),
  isLoading: state.api.isLoading
});

export default connect(mapDispatchToProps)(Driver);