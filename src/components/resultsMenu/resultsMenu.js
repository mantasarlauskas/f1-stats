import React from 'react';
import PropTypes from 'prop-types';
import ResultsMenuItem from '../resultsMenuItem';
import './styles.scss';

const menuItems = [
  'Race',
  'Qualifying',
  'Pit Stops'
];

const ResultsMenu = ({ id, url }) => (
  <div className={'results-menu'}>
    {menuItems.map(item => (
      <ResultsMenuItem key={item} id={id} url={url} item={item} />))}
  </div>
);

ResultsMenu.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ResultsMenu;
