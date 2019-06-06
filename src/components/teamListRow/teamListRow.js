import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const TeamListRow = ({ constructorId, name }) => (
  <Link to={`/team/${constructorId}`} className={'team-list-row'} key={constructorId}>
    <div className={'team-list-row__title'}>{name}</div>
    <div className={'team-list-row__image'}>
      <img src={`/src/img/teams/${constructorId}.png`} alt={name} />
    </div>
  </Link>
);

TeamListRow.propTypes = {
  constructorId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TeamListRow;
