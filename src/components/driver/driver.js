import React from 'react';
import PropTypes from 'prop-types';
import DriverInfo from '../driverInfo';
import Loading from '../loading';

const Driver = ({
  driverStandings, team, driver, isLoading
}) => (
  <div className={'container'}>
    {isLoading ? (
      <Loading size={100} />
    ) : driver ? (
      <DriverInfo {...driverStandings} {...team} {...driver} />
    ) : (
      <div className={'empty'}>Driver does not exist</div>
    )}
  </div>
);

Driver.propTypes = {
  driver: PropTypes.object,
  driverStandings: PropTypes.object,
  team: PropTypes.object,
  isLoading: PropTypes.bool.isRequired
};

Driver.defaultProps = {
  driver: null,
  driverStandings: null,
  team: null
};

export default Driver;
