import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { driverTeamSelector } from '../../selectors/api';
import { hideAdditionalMenu } from '../../actions/additionalMenu';
import './style.scss';

const DriverCard = ({
  driverId,
  givenName,
  familyName,
  onRouteChange,
  team: { constructorId }
}) => (
  <Link
    onClick={onRouteChange}
    to={`/driver/${driverId}`}
    className={`driver-card border-color-${constructorId}`}
  >
    <span className={`driver-card__team background-color-${constructorId}`} />
    {givenName}
    <span className={'driver-card__lastname'}>
      {familyName}
    </span>
  </Link>
);

DriverCard.propTypes = {
  team: PropTypes.shape({
    constructorId: PropTypes.string
  }).isRequired,
  onRouteChange: PropTypes.func.isRequired,
  driverId: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired
};

const mapStateToProps = (state, { driverId }) => ({
  team: driverTeamSelector(state, driverId)
});

const mapDispatchToProps = dispatch => ({
  onRouteChange: () => dispatch(hideAdditionalMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverCard);
