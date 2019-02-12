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
      displayAdditional: false
    }
  }

  showAdditional = () => {
    this.setState({
      displayAdditional: true
    })
  };

  renderDriver = ({ givenName, familyName, driverId }) => {
    return (
      <div key={driverId} className={'menu__additional__driver'}>
        {givenName}<span className={'menu__additional__driver__lastname'}>{familyName}</span>
      </div>
    )
  };

  render() {
    const { navItems, displayAdditional } = this.state;
    const { drivers, teams } = this.props;
    return (
      <nav className={'nav'}>
        <F1Logo className={'nav__logo'} />
        <ul className={'menu'}>
          {navItems.map(item => (
            <li onMouseOver={this.showAdditional} key={item} className={'menu__item'}>{item}</li>
          ))}
        </ul>
        {displayAdditional && (
          <div className={'menu__additional'}>
            {drivers.map(this.renderDriver)}
          </div>
        )}
      </nav>
    )
  }
}

const mapStateToProps = ({ api: { drivers, teams } }) => ({
  drivers,
  teams
});

export default connect(mapStateToProps)(Nav);