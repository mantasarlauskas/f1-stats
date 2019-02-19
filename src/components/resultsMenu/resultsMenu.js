import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class ResultsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        'Race',
        'Qualifying',
        'Pit Stops'
      ]
    }
  }

  handleClick = () => {
    window.scrollTo(0, 0);
  };

  renderItem = item => {
    const itemLink = item.replace(/\s/g, '').toLowerCase();
    const { id, url } = this.props;
    return (
      <Link
        key={item}
        to={`/results/${id}/${itemLink}`}
        className={`results-menu__item ${url.includes(itemLink) ? 'results-menu__item--active' : ''}`}
        onClick={this.handleClick}
      >
        {item}
      </Link>
    )
  };

  render() {
    const { menuItems } = this.state;
    return (
      <div className={'results-menu'}>
        {menuItems.map(this.renderItem)}
      </div>
    )
  }
}

export default ResultsMenu;