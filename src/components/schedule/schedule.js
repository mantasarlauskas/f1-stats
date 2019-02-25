import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ScheduleRow from '../scheduleRow';
import Loading from '../loading';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      isLoading: true
    };
    this.fetchData();
  }

  fetchData = async () => {
    const {
      data: { MRData: { RaceTable: { Races } } }
    } = await axios('https://ergast.com/api/f1/2019.json');
    this.setRaces(Races);
  };

  setRaces = (races) => {
    this.setState({
      races,
      isLoading: false
    });
  };

  render() {
    const { races, isLoading } = this.state;
    if (!isLoading) {
      return (
        <Fragment>
          <div className={'title'}>
            2019 Race Schedule
          </div>
          <table className={'table'}>
            <tbody>
              <tr>
                <th className={'xs-hide'}>Round</th>
                <th>Race</th>
                <th className={'m-hide'}>Circuit</th>
                <th className={'xs-hide'}>Layout</th>
                <th>Date</th>
              </tr>
              {races.map(race => <ScheduleRow key={race.round} {...race} />)}
            </tbody>
          </table>
        </Fragment>
      );
    }
    return (
      <div className={'container'}>
        <Loading />
      </div>
    );
  }
}

export default Schedule;
