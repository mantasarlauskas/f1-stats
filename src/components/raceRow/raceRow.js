import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../img/images';

const RaceRow = ({
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
      <img src={Images.teams[constructorId]} alt={name} />
    </td>
    <td className={'m-hide'}>{laps}</td>
    <td className={'xs-hide'}>{grid}</td>
    <td>{Time && Time.time}</td>
    <td className={'xs-hide'}>{status}</td>
    <td className={'xs-hide'}>{points}</td>
  </tr>
);

RaceRow.propTypes = {
  number: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  positionText: PropTypes.string.isRequired,
  laps: PropTypes.string.isRequired,
  grid: PropTypes.string.isRequired,
  Time: PropTypes.shape({
    time: PropTypes.string
  }),
  Driver: PropTypes.shape({
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired
  }).isRequired,
  Constructor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    constructorId: PropTypes.string.isRequired
  }).isRequired
};

RaceRow.defaultProps = {
  Time: {}
};

export default RaceRow;
