import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QualifyingRow from '../qualifyingRow';

const Qualifying = ({ results }) => (
  <Fragment>
    <div className={'title'}>Qualifying</div>
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
  ).isRequired
};

export default Qualifying;
