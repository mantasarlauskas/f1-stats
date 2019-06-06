import React from 'react';
import PropTypes from 'prop-types';

const ScheduleRow = ({
  round, raceName, date, Circuit: { circuitName, circuitId }
}) => (
  <tr key={round} className={'table__row'}>
    <td className={'xs-hide'}>{round}</td>
    <td>{raceName}</td>
    <td className={'m-hide'}>{circuitName}</td>
    <td className={'xs-hide'}>
      <img className={'circuit'} src={`/src/img/circuits/${circuitId}.png`} alt={circuitName} />
    </td>
    <td>{date}</td>
  </tr>
);

ScheduleRow.propTypes = {
  round: PropTypes.string.isRequired,
  raceName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  Circuit: PropTypes.shape({
    circuitName: PropTypes.string.isRequired,
    circuitId: PropTypes.string.isRequired
  }).isRequired
};

export default ScheduleRow;
