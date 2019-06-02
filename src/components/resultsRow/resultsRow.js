import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

const ResultsRow = ({
  round, raceName, date, Circuit: { circuitName }, history: { push }
}) => (
  <tr
    onClick={() => push(`/results/${round}/race`)}
    key={round}
    className={'table__row table__row--clickable'}
  >
    <td>{round}</td>
    <td>{raceName}</td>
    <td className={'m-hide'}>{circuitName}</td>
    <td className={'xs-hide'}>{date}</td>
  </tr>
);

ResultsRow.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  round: PropTypes.string.isRequired,
  raceName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  Circuit: PropTypes.shape({
    circuitName: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(ResultsRow);
