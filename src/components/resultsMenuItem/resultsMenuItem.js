import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default ({ id, url, item }) => {
  const itemLink = item.replace(/\s/g, '').toLowerCase();
  return (
    <Link
      key={item}
      to={`/results/${id}/${itemLink}`}
      className={'results-menu-item '
        + `${url.includes(itemLink) ? 'results-menu-item--active' : ''}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {item}
    </Link>
  );
};
