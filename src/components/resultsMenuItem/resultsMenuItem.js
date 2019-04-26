import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const ResultsMenuItem = ({ id, url, item }) => {
  const itemLink = item.replace(/\s/g, '').toLowerCase();
  return (
    <Link
      key={item}
      to={`/results/${id}/${itemLink}`}
      className={
        'results-menu-item '
        + `${url.includes(itemLink) ? 'results-menu-item--active' : ''}`
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      {item}
    </Link>
  );
};

ResultsMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

export default ResultsMenuItem;
