import React, { Fragment } from 'react';
import RaceRow from '../raceRow';

export default ({ results }) => (
  <Fragment>
    <div className={'title'}>
      Race
    </div>
    <table className={'table'}>
      <tbody>
        <tr>
          <th>Position</th>
          <th className={'m-hide'}>Number</th>
          <th>Driver</th>
          <th>Team</th>
          <th className={'l-hide'}>Car</th>
          <th className={'m-hide'}>Laps</th>
          <th className={'xs-hide'}>Grid</th>
          <th>Time</th>
          <th className={'xs-hide'}>Status</th>
          <th className={'xs-hide'}>Points</th>
        </tr>
        {results.map(row => (
          <RaceRow key={row.Driver.driverId} {...row} />))}
      </tbody>
    </table>
  </Fragment>
);
