import React from 'react';
import PropTypes from 'prop-types';
import DriverCard from '../driverCard';
import TeamCard from '../teamCard';
import './styles.scss';

const AdditionalMenu = ({ title, drivers, teams }) => (
  <div className={'additional-menu'}>
    {title === 'Teams'
      ? teams.map(team => <TeamCard key={team.constructorId} {...team} />)
      : drivers.map(driver => <DriverCard key={driver.driverId} {...driver} />)}
  </div>
);

AdditionalMenu.propTypes = {
  title: PropTypes.string.isRequired,
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      driverId: PropTypes.string.isRequired
    })
  ).isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      constructorId: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AdditionalMenu;
