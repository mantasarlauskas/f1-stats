import React, {Component, Fragment} from 'react';
import Loading from '../loading';
import axios from 'axios';

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
    const { data: { MRData: { RaceTable: { Races } } } } =
      await axios('http://ergast.com/api/f1/2019.json');
    this.setRaces(Races);
  };

  setRaces = races => {
    this.setState({
      races,
      isLoading: false
    });
  };

  renderRow = ({ round, raceName, date, Circuit: { circuitName } }) => {
    return (
      <tr key={round} className={'table__row'}>
        <td className={'xs-hide'}>{round}</td>
        <td>{raceName}</td>
        <td className={'m-hide'}>{circuitName}</td>
        <td>{date}</td>
      </tr>
    )
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
                <th>Date</th>
              </tr>
              {races.map(this.renderRow)}
            </tbody>
          </table>
        </Fragment>
      )
    } else {
      return (
        <div className={'container'}>
          <Loading />
        </div>
      )
    }
  }
}

export default Schedule;