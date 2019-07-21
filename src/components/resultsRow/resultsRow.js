import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { photoUrl } from '../../services/api';

const ResultsRow = ({
  round, raceName, date, Circuit: { circuitName, circuitId }, history: { push }
}) => (
  <tr
    onClick={() => push(`/results/${round}/race`)}
    key={round}
    className={'table__row table__row--clickable'}
  >
    <td className={'xs-hide'}>{round}</td>
    <td>{raceName}</td>
    <td className={'m-hide'}>{circuitName}</td>
    <td>
      <img className={'circuit'} src={`${photoUrl}/circuits/${circuitId}.png`} alt={circuitName} />
    </td>
    <td className={'xs-hide'}>{date}</td>
  </tr>
);

ResultsRow.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  round: PropTypes.string.isRequired,
  raceName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  Circuit: PropTypes.shape({
    circuitName: PropTypes.string.isRequired,
    circuitId: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(ResultsRow);
