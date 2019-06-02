import React, { Fragment, useState, useEffect } from 'react';
import ScheduleRow from '../scheduleRow';
import Loading from '../loading';
import fetchRaces from '../../thunks/races';

export default () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const results = await fetchRaces();
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
      <div className={'title'}>2019 Race Schedule</div>
      <table className={'table'}>
        <tbody>
          <tr>
            <th className={'xs-hide'}>Round</th>
            <th>Race</th>
            <th className={'m-hide'}>Circuit</th>
            <th className={'xs-hide'}>Layout</th>
            <th>Date</th>
          </tr>
          {races.map(race => (
            <ScheduleRow key={race.round} {...race} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
