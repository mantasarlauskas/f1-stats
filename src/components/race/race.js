import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RaceRow from '../raceRow';
import ResultsMenu from '../resultsMenu';

const Race = ({ results, id }) => (
  <Fragment>
    <div className={'title'}>Race</div>
    <ResultsMenu id={id} />
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
          <th className={'xs-hide'}>Points</th>
        </tr>
        <tr className={'spacer'} />
        {results.map(row => (
          <RaceRow key={row.Driver.driverId} {...row} />
        ))}
      </tbody>
    </table>
  </Fragment>
);

Race.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Driver: PropTypes.shape({
        driverId: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  id: PropTypes.string.isRequired
};

export default Race;
