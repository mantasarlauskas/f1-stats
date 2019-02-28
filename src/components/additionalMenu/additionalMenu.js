import React from 'react';
import { connect } from 'react-redux';
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
  drivers: PropTypes.arrayOf(PropTypes.object).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({ api: { drivers, teams } }) => ({
  drivers,
  teams
});

export default connect(mapStateToProps)(AdditionalMenu);
