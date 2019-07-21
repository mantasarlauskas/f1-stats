import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import './styles.scss';

const ResultsMenuItem = ({
  item,
  id,
  location: { pathname },
}) => {
  const itemLink = item.replace(/\s/g, '').toLowerCase();
  return (
    <Link
      key={item}
      to={`/results/${id}/${itemLink}`}
      className={
        'results-menu-item '
        + `${pathname.includes(itemLink) ? 'results-menu-item--active' : ''}`
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      {item}
    </Link>
  );
};

ResultsMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  item: PropTypes.string.isRequired
};

export default withRouter(ResultsMenuItem);
