import React from 'react';
import PropTypes from 'prop-types';
import ResultsMenuItem from '../resultsMenuItem';
import './styles.scss';

const menuItems = ['Race', 'Qualifying', 'Pit Stops'];

const ResultsMenu = ({ id }) => (
  <div className={'results-menu'}>
    {menuItems.map(item => (
      <ResultsMenuItem key={item} id={id} item={item} />
    ))}
  </div>
);

ResultsMenu.propTypes = {
  id: PropTypes.string.isRequired
};

export default ResultsMenu;
