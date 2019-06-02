import React, { Fragment, useState, useEffect } from 'react';
import ResultsRow from '../resultsRow';
import Loading from '../loading';
import fetchResults from '../../thunks/races';

export default () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const results = await fetchResults();
    setRaces(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className={'container'}>
      <Loading size={100} />
    </div>
  ) : (
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
          {races.map(race => (
            <ResultsRow key={race.round} {...race} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
