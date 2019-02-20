import React from 'react';
import ResultsMenuItem from '../resultsMenuItem';
import './styles.scss';

const menuItems = [
  'Race',
  'Qualifying',
  'Pit Stops'
];

export default ({ id, url }) => (
  <div className={'results-menu'}>
    {menuItems.map(item =>
      <ResultsMenuItem key={item} id={id} url={url} item={item} />
    )}
  </div>
);