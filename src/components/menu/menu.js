import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AdditionalMenu from '../additionalMenu';
import { hideAdditionalMenu, showAdditionalMenu } from '../../actions/additionalMenu';
import './styles.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          type: 0,
          title: 'Teams',
          url: null
        },
        {
          type: 0,
          title: 'Drivers',
          url: null
        },
        {
          type: 1,
          title: 'Driver Standings',
          url: 'driver-standings'
        }
      ],
    };
  }

  renderAdditional = title => {
    const { isLoading, additionalMenu } = this.props;
    return title === additionalMenu && !isLoading && <AdditionalMenu title={additionalMenu} />;
  };

  renderMenu = ({ type, title, url }) => {
    return type ? (
      <Link key={title} className={'menu__item__text'} to={`/${url.toLowerCase()}`}>
        {this.renderMenuItem(type, title)}
      </Link>
    ) : this.renderMenuItem(type, title);
  };

  renderMenuItem = (type, title) => {
    const { onItemHover, onItemLeave, additionalMenu } = this.props;
    return (
      <li
        key={title}
        className={'menu__item'}
        onMouseLeave={onItemLeave}
        onClick={() => type && onItemLeave()}
        onMouseOver={() => !type && !additionalMenu && onItemHover(title)}
      >
        {title}
        {this.renderAdditional(title)}
      </li>
    );
  };

  render() {
    const { menuItems } = this.state;
    return (
      <ul className={'menu'}>
        {menuItems.map(this.renderMenu)}
      </ul>
    )
  }
}

const mapStateToProps = ({ api: { isLoading }, additionalMenu }) => ({
  isLoading,
  additionalMenu
});

const mapDispatchToProps = dispatch => ({
  onItemHover: item => dispatch(showAdditionalMenu(item)),
  onItemLeave: () => dispatch(hideAdditionalMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);