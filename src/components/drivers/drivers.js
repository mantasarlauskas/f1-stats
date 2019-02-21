import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DriverListRow from '../driverListRow';
import Loading from '../loading';
import './styles.scss';

const Drivers = ({ isLoading, drivers }) => {
  if (!isLoading) {
    return (
      <Fragment>
        <div className={'title'}>
          Drivers
        </div>
        <div className={'drivers'}>
          {drivers.map(driver => (
            <DriverListRow key={driver.driverId} {...driver} />))}
        </div>
      </Fragment>
    );
  }
  return (
    <div className={'container'}>
      <Loading />
    </div>
  );
};

const mapStateToProps = ({ api: { drivers, isLoading } }) => ({
  drivers,
  isLoading
});

export default connect(mapStateToProps)(Drivers);
