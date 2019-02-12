import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Main from '../main';
import { fetchData } from '../../thunks/api';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    props.onLoad();
  }

  render() {
    return (
      <Fragment>
        <Main />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchData())
});

export default connect(null, mapDispatchToProps)(App);