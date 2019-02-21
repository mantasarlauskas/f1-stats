import React from 'react';
import './styles.scss';

export default ({
  driver,
  team: { name },
  isDriver,
  points,
  position,
  constructorId
}) => (
  <div
    className={isDriver
      ? 'standings-row'
      : 'standings-row standings-row--short'}
  >
    <div className={'standings-row__number-wrapper'}>
      <span className={'standings-row__number'}>
        {position}
      </span>
      <span
        className={'standings-row__number-color '
        + `background-color-${constructorId}`}
      />
    </div>
    {isDriver && (
      <div className={'standings-row__name'}>
        {driver.givenName}
        <span className={'standings-row__name--bold'}>
          {driver.familyName}
        </span>
      </div>
    )}
    <div
      className={isDriver
        ? 'xs-hide standings-row__driver-team'
        : 'standings-row__name--bold'}
    >
      {name}
    </div>
    <img
      className={'m-hide'}
      src={`/src/img/teams/${constructorId}.png`}
      alt={`${name}`}
    />
    <div className={'standings-row__points'}>
      {points}
    </div>
  </div>
);
