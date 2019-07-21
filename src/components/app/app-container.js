import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchData from '../../actions/stats';
import App from './app';

const mapDispatchToProps = {
  fetchData
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
