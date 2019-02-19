import React, { Component, Fragment } from 'react';

class Qualifying extends Component {
  renderRow = ({
    position,
    number,
    Driver: { givenName, familyName },
    Constructor: { name, constructorId },
    Q1, Q2, Q3
  }) => {
    return (
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
    )
  };

  render() {
    const { results } = this.props;
    return (
      <Fragment>
        <div className={'title'}>
          Qualifying
        </div>
        <div className={'responsive-table'}>
          <table className={'table'}>
            <tbody>
            <tr>
              <th>Position</th>
              <th className={'m-hide'}>Number</th>
              <th>Driver</th>
              <th>Team</th>
              <th className={'l-hide'}>Car</th>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
            </tr>
            {results.map(this.renderRow)}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Qualifying;