import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

ScrollToTop.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  children: PropTypes.element.isRequired
};

export default withRouter(ScrollToTop);
