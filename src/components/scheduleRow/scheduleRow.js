import React from 'react';

export default ({
  round,
  raceName,
  date,
  Circuit: { circuitName, circuitId }
}) => (
  <tr key={round} className={'table__row'}>
    <td className={'xs-hide'}>{round}</td>
    <td>
      {raceName}
    </td>
    <td className={'m-hide'}>{circuitName}</td>
    <td className={'xs-hide'}>
      <img
        className={'circuit'}
        src={`/src/img/circuits/${circuitId}.png`}
        alt={`${circuitName}`}
      />
    </td>
    <td>{date}</td>
  </tr>
);
