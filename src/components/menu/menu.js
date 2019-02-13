import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        'Teams',
        'Drivers',
        'Standings'
      ],
      displayAdditional: ''
    };
  }

  showAdditional = item => {
    this.setState({
      displayAdditional: item
    });
  };

  hideAdditional = () => {
    this.setState({
      displayAdditional: ''
    });
  };

  renderDriver = ({ givenName, familyName, driverId }) => {
    const { standings } = this.props;
    const { constructorId } = standings.find(item => item.driverId === driverId);
    return (
      <div key={driverId} className={'menu__driver'}>
        <span className={`menu__driver__team background-color-${constructorId}`} />
        {givenName}
        <span className={'menu__driver__lastname'}>
          {familyName}
        </span>
      </div>
    )
  };

  renderTeam = ({ name, constructorId }) => {
    return (
      <div key={constructorId} className={'menu__team'}>
        <div className={'menu__team__title'}>
          {name}
        </div>
        <div className={'menu__team__logo'}>
          <span className={`menu__team__logo__color background-color-${constructorId}`} />
          <img src={`/src/img/teams/${constructorId}.png`} alt={`${name}`}/>
        </div>
      </div>
    )
  };

  renderAdditional = () => {
    const { displayAdditional } = this.state;
    const { drivers, teams } = this.props;
    return displayAdditional === 'Drivers' ? (
      <div className={'menu__item__additional'}>
        {drivers.map(this.renderDriver)}
      </div>
    ) : displayAdditional === 'Teams' ? (
      <div className={'menu__item__additional'}>
        {teams.map(this.renderTeam)}
      </div>
    ) : null;
  };

  renderMenuItem = item => {
    const { displayAdditional } = this.state;
    const { standings, teams, drivers } = this.props;
    return (
      <Link key={item} to={`/${item.toLowerCase()}`}>
        <li
          onMouseOver={() => this.showAdditional(item)}
          onMouseLeave={this.hideAdditional}
          className={'menu__item'}
        >
          {item}
          {item === displayAdditional && standings.length > 0 &&
            teams.length > 0 && drivers.length > 0 &&
            this.renderAdditional()
          }
        </li>
      </Link>
    );
  };

  render() {
    const { menuItems } = this.state;
    return (
      <ul className={'menu'}>
        {menuItems.map(this.renderMenuItem)}
      </ul>
    )
  }
}


const mapStateToProps = ({ api: { drivers, teams, standings } }) => ({
  drivers,
  teams,
  standings
});

export default connect(mapStateToProps)(Menu);