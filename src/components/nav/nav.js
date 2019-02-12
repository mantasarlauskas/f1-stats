import React, { Component } from 'react';
import { connect } from 'react-redux';
import F1Logo from '../../img/f1_logo.svg';
import './styles.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
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
    return (
      <div key={driverId} className={'driver'}>
        {givenName}
        <span className={'driver__lastname'}>
          {familyName}
        </span>
      </div>
    )
  };

  renderTeam = ({ name, constructorId }) => {
    return (
      <div key={constructorId} className={'team'}>
        <span className={'team__title'}>
          {name}
        </span>
        <div className={'team__logo'}>
          <img src={`/src/img/teams/${constructorId}.png`}  alt={`${name}`}/>
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
    return (
      <li
        onMouseOver={() => this.showAdditional(item)}
        onMouseLeave={this.hideAdditional}
        key={item}
        className={'menu__item'}
      >
        {item}
        {item === displayAdditional && this.renderAdditional()}
      </li>
    );
  };

  render() {
    const { navItems } = this.state;
    return (
      <nav className={'nav'}>
        <F1Logo className={'nav__logo'} />
        <ul className={'menu'}>
          {navItems.map(this.renderMenuItem)}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ api: { drivers, teams } }) => ({
  drivers,
  teams
});

export default connect(mapStateToProps)(Nav);