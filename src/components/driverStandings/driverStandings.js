import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DriverRow from '../driverRow';
import Loading from '../loading';

const DriverStandings = ({ driverStandings, isLoading }) => {
  if (!isLoading) {
    return (
      <Fragment>
        <div className={'title'}>2018 drivers championship</div>
        <div className={'standings'}>
          {driverStandings.map(driver => (
            <DriverRow key={driver.driverId} {...driver} />
          ))}
        </div>
      </Fragment>
    );
  }
  return (
    <div className={'container'}>
      <Loading size={100} />
    </div>
  );
};

DriverStandings.propTypes = {
  driverStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ api: { driverStandings, isLoading } }) => ({
  driverStandings,
  isLoading
});

export default connect(mapStateToProps)(DriverStandings);
