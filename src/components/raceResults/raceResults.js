import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Switch } from 'react-router-dom';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Race from '../race';
import Loading from '../loading';
import NoMatch from '../noMatch';
import { getRace } from '../../services/api';

const RaceResults = ({
  match: {
    params: { id },
    url
  },
  isMainDataLoading
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const apiResults = await getRace(id);
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
      <div className={'title title--main'}>{`2019 Round ${id} results`}</div>
      <Switch>
        <Route
          exact
          path={`${url}/race`}
          component={() => <Race id={id} results={results[0][0].Results} />}
        />
        <Route
          path={`${url}/qualifying`}
          component={() => <Qualifying id={id} results={results[1][0].QualifyingResults} />}
        />
        <Route
          path={`${url}/pitstops`}
          component={() => (isMainDataLoading ? (
            <Loading size={60} />
          ) : (
            <PitStops id={id} results={results[2][0].PitStops} />
          ))
          }
        />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  ) : (
    <div className={'container'}>
      {isLoading ? <Loading size={100} /> : <div className={'empty'}>Race does not exist</div>}
    </div>
  );
};

RaceResults.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  isMainDataLoading: PropTypes.bool.isRequired
};

export default RaceResults;
