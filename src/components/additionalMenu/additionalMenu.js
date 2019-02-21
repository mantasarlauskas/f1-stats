import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import DriverCard from '../driverCard';
import TeamCard from '../teamCard';

const AdditionalMenu = ({ title, drivers, teams }) => (
  <div className={'additional-menu'}>
    {title === 'Teams'
      ? teams.map(team => <TeamCard key={team.constructorId} {...team} />)
      : drivers.map(driver => <DriverCard key={driver.driverId} {...driver} />)}
  </div>
);

const mapStateToProps = ({ api: { drivers, teams } }) => ({
  drivers,
  teams
});

export default connect(mapStateToProps)(AdditionalMenu);
