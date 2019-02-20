import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import ResultsMenu from '../resultsMenu';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Race from '../race';
import axios from 'axios';
import Loading from '../loading';

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
    const { match: { params: { id } } } = this.props;
    const { data: { MRData: { RaceTable: { Races: Race } } } } =
      await axios(`http://ergast.com/api/f1/2018/${id}/results.json`);
    const { data: { MRData: { RaceTable: { Races: Qualifying } } } } =
      await axios(`http://ergast.com/api/f1/2018/${id}/qualifying.json`);
    const { data: { MRData: { RaceTable: { Races: PitStops } } } } =
      await axios(`http://ergast.com/api/f1/2018/${id}/pitstops.json`);
    this.setData(
      Race.length > 0 ? Race[0].Results : Race,
      Qualifying.length > 0 ? Qualifying[0].QualifyingResults : Qualifying,
      PitStops.length > 0 ? PitStops[0].PitStops : PitStops
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
    const { match: { params: { id }, url }, location: { pathname } } = this.props;
    const { race, qualifying, pitStops, isLoading } = this.state;
    if (race.length > 0 && qualifying.length > 0 && pitStops.length > 0) {
      return (
        <Fragment>
          <div className={'title title--main'}>
            2018 Round {id} results
          </div>
          <Route exact path={`${url}/race`} component={() => <Race results={race} />} />
          <Route path={`${url}/qualifying`} component={() => <Qualifying results={qualifying} />} />
          <Route path={`${url}/pitstops`} component={() => <PitStops results={pitStops} />} />
          <ResultsMenu url={pathname} id={id} />
        </Fragment>
      )
    } else {
      return (
        <div className={'container'}>
          {isLoading ? <Loading/> : (
            <div className={'empty'}>
              Race does not exist
            </div>
          )}
        </div>
      )
    }
  }
}

export default RaceResults;