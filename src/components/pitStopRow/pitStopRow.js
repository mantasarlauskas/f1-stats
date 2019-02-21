import React from 'react';
import { connect } from 'react-redux';
import { driverSelector, driverTeamSelector } from '../../selectors/api';
import Loading from '../loading';

const PitStopRow = ({
  driver,
  team,
  stop,
  lap,
  duration
}) => {
  if (team && driver) {
    const { givenName, familyName } = driver;
    const { constructorId, name } = team;
    return (
      <tr className={'table__row'}>
        <td>{`${givenName} ${familyName}`}</td>
        <td>{name}</td>
        <td className={'l-hide'}>
          <img src={`/src/img/teams/${constructorId}.png`} alt={name} />
        </td>
        <td className={'xs-hide'}>{stop}</td>
        <td>{lap}</td>
        <td>{duration}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td colSpan={6}>
        <Loading />
      </td>
    </tr>
  );
};

const mapStateToProps = (state, { driverId }) => ({
  driver: driverSelector(state, driverId),
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(PitStopRow);
