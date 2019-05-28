import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DriverRow from '../driverRow';
import Loading from '../loading';

const DriverStandings = ({ driverStandings, isLoading }) => (isLoading ? (
  <div className={'container'}>
    <Loading size={100} />
  </div>
) : (
  <Fragment>
    <div className={'title'}>2018 drivers championship</div>
    <div className={'standings'}>
      {driverStandings.map(driver => (
        <DriverRow key={driver.driverId} {...driver} />
      ))}
    </div>
  </Fragment>
));

DriverStandings.propTypes = {
  driverStandings: PropTypes.arrayOf(
    PropTypes.shape({
      driverId: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default DriverStandings;
