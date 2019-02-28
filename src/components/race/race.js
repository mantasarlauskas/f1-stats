import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RaceRow from '../raceRow';

const Race = ({ results }) => (
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
          <th className={'xs-hide'}>Team</th>
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

Race.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Race;
