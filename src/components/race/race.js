import React, { Component, Fragment } from 'react';

class Race extends Component {
  renderRow = ({
   number,
   status,
   points,
   positionText,
   laps,
   grid,
   Time,
   Driver: { givenName, familyName },
   Constructor: { name, constructorId }
  }) => {
    return (
      <tr key={number} className={'table__row'}>
        <td>{positionText}</td>
        <td className={'m-hide'}>{number}</td>
        <td>{`${givenName} ${familyName}`}</td>
        <td>{name}</td>
        <td className={'l-hide'}>
          <img src={`/src/img/teams/${constructorId}.png`} alt={name} />
        </td>
        <td className={'m-hide'}>{laps}</td>
        <td className={'xs-hide'}>{grid}</td>
        <td>{Time && Time.time}</td>
        <td className={'xs-hide'}>{status}</td>
        <td className={'xs-hide'}>{points}</td>
      </tr>
    )
  };

  render() {
    const { results } = this.props;
    return (
      <Fragment>
        <div className={'title'}>
          Race
        </div>
        <table className={'table'}>
          <tbody>
          <tr>
            <th>Position</th>
            <th className={'m-hide'}>Number</th>
            <th>Driver</th>
            <th>Team</th>
            <th className={'l-hide'}>Car</th>
            <th className={'m-hide'}>Laps</th>
            <th className={'xs-hide'}>Grid</th>
            <th>Time</th>
            <th className={'xs-hide'}>Status</th>
            <th className={'xs-hide'}>Points</th>
          </tr>
          {results.map(this.renderRow)}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default Race;