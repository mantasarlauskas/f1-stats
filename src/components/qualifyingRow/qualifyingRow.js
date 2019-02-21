import React from 'react';

export default ({
  position,
  number,
  Driver: { givenName, familyName },
  Constructor: { name, constructorId },
  Q1, Q2, Q3
}) => (
  <tr key={position} className={'table__row'}>
    <td>{position}</td>
    <td className={'m-hide'}>{number}</td>
    <td>{`${givenName} ${familyName}`}</td>
    <td>{name}</td>
    <td className={'l-hide'}>
      <img src={`/src/img/teams/${constructorId}.png`} alt={name} />
    </td>
    <td>{Q1}</td>
    <td>{Q2}</td>
    <td>{Q3}</td>
  </tr>
);
