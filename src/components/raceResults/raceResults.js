import React, { Component, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import ResultsMenu from '../resultsMenu';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Race from '../race';
import Loading from '../loading';
import NoMatch from '../noMatch';

const apiURL = 'https://ergast.com/api/f1/2018';

class RaceResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
      qualifying: [],
      pitStops: [],
      isLoading: true
    };
    this.fetchData();
  }

  fetchData = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const {
      data: {
        MRData: {
          RaceTable: { Races: RaceStats }
        }
      }
    } = await axios(`${apiURL}/${id}/results.json`);
    const {
      data: {
        MRData: {
          RaceTable: { Races: QualifyingStats }
        }
      }
    } = await axios(`${apiURL}/${id}/qualifying.json`);
    const {
      data: {
        MRData: {
          RaceTable: { Races: PitStopStats }
        }
      }
    } = await axios(`${apiURL}/${id}/pitstops.json`);
    this.parseData(RaceStats, QualifyingStats, PitStopStats);
  };

  parseData = (races, qualifying, pitstops) => {
    this.setData(
      races.length > 0 ? races[0].Results : races,
      qualifying.length > 0 ? qualifying[0].QualifyingResults : qualifying,
      pitstops.length > 0 ? pitstops[0].PitStops : pitstops
    );
  };

  setData = (race, qualifying, pitStops) => {
    this.setState({
      race,
      qualifying,
      pitStops,
      isLoading: false
    });
  };

  render() {
    const {
      match: {
        params: { id },
        url
      },
      location: { pathname }
    } = this.props;
    const {
      race, qualifying, pitStops, isLoading
    } = this.state;
    if (race.length > 0 && qualifying.length > 0 && pitStops.length > 0) {
      return (
        <Fragment>
          <div className={'title title--main'}>{`2018 Round ${id} results`}</div>
          <Switch>
            <Route exact path={`${url}/race`} component={() => <Race results={race} />} />
            <Route
              path={`${url}/qualifying`}
              component={() => <Qualifying results={qualifying} />}
            />
            <Route
              path={`${url}/pitstops`}
              component={() => <PitStops results={pitStops} />}
            />
            <Route component={NoMatch} />
          </Switch>
          <ResultsMenu url={pathname} id={id} />
        </Fragment>
      );
    }
    return (
      <div className={'container'}>
        {isLoading ? (
          <Loading size={100} />
        ) : (
          <div className={'empty'}>Race does not exist</div>
        )}
      </div>
    );
  }
}

RaceResults.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  location: ReactRouterPropTypes.location.isRequired
};

export default RaceResults;
