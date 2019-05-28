import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DriverListRow from '../driverListRow';
import Loading from '../loading';
import './styles.scss';

const Drivers = ({ isLoading, drivers }) => (isLoading ? (
  <div className={'container'}>
    <Loading size={100} />
  </div>
) : (
  <Fragment>
    <div className={'title'}>Drivers</div>
    <div className={'drivers'}>
      {drivers.map(driver => (
        <DriverListRow key={driver.driverId} {...driver} />
      ))}
    </div>
  </Fragment>
));

Drivers.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      driverId: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Drivers;
