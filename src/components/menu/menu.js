import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menuItem';
import './styles.scss';

const menuItems = [
  {
    type: 0,
    title: 'Teams',
    url: 'teams'
  },
  {
    type: 0,
    title: 'Drivers',
    url: 'drivers'
  },
  {
    type: 1,
    title: 'Driver Standings',
    url: 'driver-standings'
  },
  {
    type: 1,
    title: 'Team Standings',
    url: 'team-standings'
  },
  {
    type: 1,
    title: 'Results',
    url: 'results'
  },
  {
    type: 1,
    title: 'Schedule',
    url: 'schedule'
  },
  {
    type: 1,
    title: 'Favourites',
    url: 'favourites'
  }
];

const Menu = ({ onClose, showMenu }) => (
  <nav className={`menu${!showMenu ? ' menu--hide' : ''}`}>
    {menuItems.map(item => (
      <MenuItem onClose={onClose} key={item.title} {...item} />
    ))}
  </nav>
);

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired
};

export default Menu;
