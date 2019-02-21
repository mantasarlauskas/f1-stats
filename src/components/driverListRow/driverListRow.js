import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { driverTeamSelector } from '../../selectors/api';
import './styles.scss';

const DriverListRow = ({
  team: { constructorId },
  givenName,
  driverId,
  familyName
}) => (
  <Link to={`/driver/${driverId}`} className={'driver-list-row'}>
    <span
      className={`driver-list-row__color background-color-${constructorId}`}
    />
    {`${givenName} ${familyName}`}
  </Link>
);

const mapStateToProps = (state, { driverId }) => ({
  team: driverTeamSelector(state, driverId)
});

export default connect(mapStateToProps)(DriverListRow);
