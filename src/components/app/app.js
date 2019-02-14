import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Main from '../main';
import { Switch, Route, withRouter } from 'react-router-dom';
import { fetchData } from '../../thunks/api';
import Nav from '../nav';
import Driver from '../driver';
import DriverStandings from '../driverStandings';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/driver-standings" component={DriverStandings} />
          <Route path="/driver/:id" component={Driver} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchData())
});

export default withRouter(connect(null, mapDispatchToProps)(App));