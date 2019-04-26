import React, { Component, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import axios from 'axios';
import Loading from '../loading';

class Results extends Component {
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
      data: {
        MRData: {
          RaceTable: { Races }
        }
      }
    } = await axios('https://ergast.com/api/f1/2018.json');
    this.setRaces(Races);
  };

  setRaces = (races) => {
    this.setState({
      races,
      isLoading: false
    });
  };

  redirectToPage = (round) => {
    const {
      history: { push }
    } = this.props;
    push(`/results/${round}/race`);
  };

  renderRow = ({
    round, raceName, date, Circuit: { circuitName }
  }) => (
    <tr
      onClick={() => this.redirectToPage(round)}
      key={round}
      className={'table__row table__row--clickable'}
    >
      <td>{round}</td>
      <td>{raceName}</td>
      <td className={'m-hide'}>{circuitName}</td>
      <td className={'xs-hide'}>{date}</td>
    </tr>
  );

  render() {
    const { races, isLoading } = this.state;
    if (!isLoading) {
      return (
        <Fragment>
          <div className={'title'}>2018 Race results</div>
          <table className={'table'}>
            <tbody>
              <tr>
                <th>Round</th>
                <th>Race</th>
                <th className={'m-hide'}>Circuit</th>
                <th className={'xs-hide'}>Date</th>
              </tr>
              {races.map(this.renderRow)}
            </tbody>
          </table>
        </Fragment>
      );
    }
    return (
      <div className={'container'}>
        <Loading size={100} />
      </div>
    );
  }
}

Results.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

export default Results;
