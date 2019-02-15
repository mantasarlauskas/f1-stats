import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { driverTeamSelector } from '../../selectors/api';
import { hideAdditionalMenu } from '../../actions/additionalMenu';
import './style.scss';

const DriverCard = ({ driverId, givenName, familyName, onRouteChange, team: { constructorId } }) => (
  <Link
    onClick={onRouteChange}
    to={`/driver/${driverId}`}
    className={'driver-card'}
  >
    <span className={`driver-card__team background-color-${constructorId}`} />
    {givenName}
    <span className={'driver-card__lastname'}>
      {familyName}
    </span>
  </Link>
);

const mapStateToProps = (state, { driverId }) => ({
  team: driverTeamSelector(state, driverId)
});

const mapDispatchToProps = dispatch => ({
  onRouteChange: () => dispatch(hideAdditionalMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverCard);