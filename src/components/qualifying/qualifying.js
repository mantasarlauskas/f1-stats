import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QualifyingRow from '../qualifyingRow';
import ResultsMenu from '../resultsMenu';

const Qualifying = ({ results, id }) => (
  <Fragment>
    <div className={'title'}>Qualifying</div>
    <ResultsMenu id={id} />
    <div className={'responsive-table'}>
      <table className={'table'}>
        <tbody>
          <tr>
            <th>Position</th>
            <th className={'m-hide'}>Number</th>
            <th>Driver</th>
            <th>Team</th>
            <th className={'l-hide'}>Car</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
          </tr>
          <tr className={'spacer'} />
          {results.map(row => (
            <QualifyingRow key={row.Driver.driverId} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  </Fragment>
);

Qualifying.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Driver: PropTypes.shape({
        driverId: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  id: PropTypes.string.isRequired
};

export default Qualifying;
