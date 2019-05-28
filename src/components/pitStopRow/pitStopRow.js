import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../img/images';

const PitStopRow = ({
  driver: { givenName, familyName },
  team: { constructorId, name },
  stop,
  lap,
  duration
}) => (
  <tr className={'table__row'}>
    <td>{`${givenName} ${familyName}`}</td>
    <td>{name}</td>
    <td className={'l-hide'}>
      <img src={Images.teams[constructorId]} alt={name} />
    </td>
    <td className={'xs-hide'}>{stop}</td>
    <td>{lap}</td>
    <td>{duration}</td>
  </tr>
);

PitStopRow.propTypes = {
  driver: PropTypes.shape({
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired
  }).isRequired,
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  stop: PropTypes.string.isRequired,
  lap: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default PitStopRow;
