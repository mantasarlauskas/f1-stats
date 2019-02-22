import React from 'react';

export default ({
  number,
  status,
  points,
  positionText,
  laps,
  grid,
  Time,
  Driver: { givenName, familyName },
  Constructor: { name, constructorId }
}) => (
  <tr key={number} className={'table__row'}>
    <td>{positionText}</td>
    <td className={'m-hide'}>{number}</td>
    <td>{`${givenName} ${familyName}`}</td>
    <td className={'xs-hide'}>{name}</td>
    <td className={'l-hide'}>
      <img src={`/src/img/teams/${constructorId}.png`} alt={name} />
    </td>
    <td className={'m-hide'}>{laps}</td>
    <td className={'xs-hide'}>{grid}</td>
    <td>{Time && Time.time}</td>
    <td className={'xs-hide'}>{status}</td>
    <td className={'xs-hide'}>{points}</td>
  </tr>
);
