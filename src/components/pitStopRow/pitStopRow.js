import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { photoUrl } from '../../services/api';

const PitStopRow = ({
  driver: { givenName, familyName },
  team: { constructorId, name },
  stop,
  lap,
  duration
}) => (
  <Fragment>
    <tr className={`table__row border-color-hover-${constructorId}`}>
      <td>{`${givenName} ${familyName}`}</td>
      <td>{name}</td>
      <td className={'l-hide'}>
        <img src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
      </td>
      <td className={'xs-hide'}>{stop}</td>
      <td>{lap}</td>
      <td>{duration}</td>
    </tr>
    <tr className={'spacer'} />
  </Fragment>
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
