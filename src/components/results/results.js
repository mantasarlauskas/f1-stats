import React, { Fragment, useState, useEffect } from 'react';
import ResultsRow from '../resultsRow';
import Loading from '../loading';
import { getRaces } from '../../services/api';

export default () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const results = await getRaces();
    const filteredResults = results.filter(({ date }) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      return new Date() > new Date(newDate);
    });
    setRaces(filteredResults);
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
      <div className={'title'}>2019 Race results</div>
      <table className={'table'}>
        <tbody>
          <tr>
            <th className={'xs-hide'}>Round</th>
            <th>Race</th>
            <th className={'m-hide'}>Circuit</th>
            <th>Layout</th>
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
