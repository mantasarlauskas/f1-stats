import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import ResultsMenu from '../resultsMenu';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Race from '../race';
import Loading from '../loading';
import NoMatch from '../noMatch';
import { apiUrl } from '../../thunks/api';

const RaceResults = ({
  match: {
    params: { id },
    url
  },
  location: { pathname },
  isMainDataLoading
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const requests = ['results', 'qualifying', 'pitstops'].map(async (index) => {
      const {
        data: {
          MRData: {
            RaceTable: { Races }
          }
        }
      } = await axios(`${apiUrl}/${id}/${index}.json`);
      return Races;
    });
    const apiResults = await Promise.all(requests);
    setIsLoading(false);
    if (apiResults[0].length > 0) {
      setResults(apiResults);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return results.length > 0 ? (
    <Fragment>
      <div className={'title title--main'}>{`2018 Round ${id} results`}</div>
      <Switch>
        <Route
          exact
          path={`${url}/race`}
          component={() => <Race results={results[0][0].Results} />}
        />
        <Route
          path={`${url}/qualifying`}
          component={() => <Qualifying results={results[1][0].QualifyingResults} />}
        />
        <Route
          path={`${url}/pitstops`}
          component={() => (isMainDataLoading ? (
            <Loading size={60} />
          ) : (
            <PitStops results={results[2][0].PitStops} />
          ))
          }
        />
        <Route component={NoMatch} />
      </Switch>
      <ResultsMenu url={pathname} id={id} />
    </Fragment>
  ) : (
    <div className={'container'}>
      {isLoading ? <Loading size={100} /> : <div className={'empty'}>Race does not exist</div>}
    </div>
  );
};

RaceResults.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  isMainDataLoading: PropTypes.bool.isRequired
};

export default RaceResults;
