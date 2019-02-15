import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DriverRow from '../driverRow';

const DriverStandings = ({ driverStandings }) => (
  <Fragment>
    <div className={'title'}>
      2018 drivers championship
    </div>
    <div className={'standings'}>
      {driverStandings.map(driver => <DriverRow key={driver.driverId} {...driver} />)}
    </div>
  </Fragment>
);

const mapStateToProps = ({ api: { driverStandings } }) => ({
  driverStandings
});

export default connect(mapStateToProps)(DriverStandings);