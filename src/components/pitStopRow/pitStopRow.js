import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { driverSelector, driverTeamSelector } from '../../selectors/api';
import Images from '../../img/images';
import Loading from '../loading';

const PitStopRow = ({
  driver,
  team,
  stop,
  lap,
  duration
}) => {
  if (Object.entries(team).length !== 0
    && Object.entries(driver).length !== 0) {
    const { givenName, familyName } = driver;
    const { constructorId, name } = team;
    return (
      <tr className={'table__row'}>
        <td>{`${givenName} ${familyName}`}</td>
        <td>{name}</td>
        <td className={'l-hide'}>
          <img src={Images.teams[constructorId]} alt={name} />
        </td>
        <td className={'xs-hide'}>{stop}</td>
        <td>{lap}</td>
        <td>{duration}</td>
      </tr>
    );
  }
  return (
    <tr className={'table__row--wait'}>
      <td colSpan={6}>
        <Loading size={35} />
      </td>
    </tr>
  );
};

PitStopRow.propTypes = {
  driver: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
  stop: PropTypes.string.isRequired,
  lap: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(PitStopRow);
