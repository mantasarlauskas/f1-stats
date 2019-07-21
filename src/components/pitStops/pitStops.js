import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PitStopRow from '../pitStopRow';
import ResultsMenu from '../resultsMenu';

const PitStops = ({ results, id }) => (
  <Fragment>
    <div className={'title'}>Pit Stops</div>
    <ResultsMenu id={id} />
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
        <tr className={'spacer'} />
        {results.map((pitStop, index) => (
          <PitStopRow key={index} {...pitStop} />
        ))}
      </tbody>
    </table>
  </Fragment>
);

PitStops.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired
};

export default PitStops;
