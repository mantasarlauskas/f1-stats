import React, { Fragment } from 'react';
import PitStopRow from '../pitStopRow';

export default ({ results }) => (
  <Fragment>
    <div className={'title'}>
      Pit Stops
    </div>
    <table className={'table'}>
      <tbody>
        <tr>
          <th>Driver</th>
          <th>Team</th>
          <th className={'l-hide'}>Car</th>
          <th className={'xs-hide'}>Stop</th>
          <th>Lap</th>
          <th>Duration</th>
        </tr>
        {results.map((pitStop, index) => (
          <PitStopRow key={index} {...pitStop} />))}
      </tbody>
    </table>
  </Fragment>
);
