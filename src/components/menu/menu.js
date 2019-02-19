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
          url: 'teams'
        },
        {
          type: 0,
          title: 'Drivers',
          url: 'drivers'
        },
        {
          type: 1,
          title: 'Driver Standings',
          url: 'driver-standings'
        },
        {
          type: 1,
          title: 'Team Standings',
          url: 'team-standings'
        },
        {
          type: 1,
          title: 'Results',
          url: 'results'
        },
        {
          type: 1,
          title: 'Schedule',
          url: 'schedule'
        }
      ],
    };
  }

  renderAdditional = title => {
    const { isLoading, additionalMenu } = this.props;
    return title === additionalMenu && !isLoading && <AdditionalMenu title={additionalMenu} />;
  };

  renderMenuItem = ({ type, title, url }) => {
    const { onItemHover, onItemLeave, additionalMenu } = this.props;
    return (
      <div
        key={title}
        className={'menu__item'}
        onMouseLeave={onItemLeave}
        onMouseOver={() => !type && !additionalMenu && onItemHover(title)}
      >
        <Link
          to={`/${url.toLowerCase()}`}
          className={'menu__item__text'}
          onClick={onItemLeave}
        >
          {title}
        </Link>
        {this.renderAdditional(title)}
      </div>

    );
  };

  render() {
    const { menuItems } = this.state;
    return (
      <nav className={'menu'}>
        {menuItems.map(this.renderMenuItem)}
      </nav>
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