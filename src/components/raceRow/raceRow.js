import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { photoUrl } from '../../services/api';

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
  <Fragment>
    <tr key={number} className={`table__row border-color-hover-${constructorId}`}>
      <td>{positionText}</td>
      <td className={'m-hide'}>{number}</td>
      <td>{`${givenName} ${familyName}`}</td>
      <td className={'xs-hide'}>{name}</td>
      <td className={'l-hide'}>
        <img src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
      </td>
      <td className={'m-hide'}>{laps}</td>
      <td className={'xs-hide'}>{grid}</td>
      <td>{Time && Time.time ? Time.time : status}</td>
      <td className={'xs-hide'}>{points}</td>
    </tr>
    <tr className={'spacer'} />
  </Fragment>
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
