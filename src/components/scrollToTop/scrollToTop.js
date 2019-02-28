import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  children: PropTypes.element.isRequired
};

export default withRouter(ScrollToTop);
