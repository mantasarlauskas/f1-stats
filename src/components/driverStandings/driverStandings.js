import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import DriverRow from '../driverRow';
import Loading from '../loading';

class DriverStandings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: []
    }
  }

  render() {
    const { driverStandings, isLoading } = this.props;
    if (!isLoading) {
      return (
        <Fragment>
          <div className={'title'}>
            2018 drivers championship
          </div>
          <div className={'standings'}>
            {driverStandings.map(driver => <DriverRow key={driver.driverId} {...driver} />)}
          </div>
        </Fragment>
      );
    } else {
      return (
        <div className={'container'}>
          <Loading />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ api: { driverStandings, isLoading } }) => ({
  driverStandings,
  isLoading
});

export default connect(mapStateToProps)(DriverStandings);