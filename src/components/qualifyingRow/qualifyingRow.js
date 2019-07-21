import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { photoUrl } from '../../services/api';

const QualifyingRow = ({
  position,
  number,
  Driver: { givenName, familyName },
  Constructor: { name, constructorId },
  Q1,
  Q2,
  Q3
}) => (
  <Fragment>
    <tr key={position} className={`table__row border-color-hover-${constructorId}`}>
      <td>{position}</td>
      <td className={'m-hide'}>{number}</td>
      <td>{`${givenName} ${familyName}`}</td>
      <td>{name}</td>
      <td className={'l-hide'}>
        <img src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
      </td>
      <td>{Q1}</td>
      <td>{Q2}</td>
      <td>{Q3}</td>
    </tr>
    <tr className={'spacer'} />
  </Fragment>
);

QualifyingRow.propTypes = {
  Driver: PropTypes.shape({
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired
  }).isRequired,
  Constructor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    constructorId: PropTypes.string.isRequired
  }).isRequired,
  number: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  Q1: PropTypes.string,
  Q2: PropTypes.string,
  Q3: PropTypes.string
};

QualifyingRow.defaultProps = {
  Q1: '',
  Q2: '',
  Q3: ''
};

export default QualifyingRow;
