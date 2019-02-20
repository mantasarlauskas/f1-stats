import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AdditionalMenu from '../additionalMenu';
import { hideAdditionalMenu, showAdditionalMenu } from '../../actions/additionalMenu';

const MenuItem = ({ type, title, url, onItemHover, onItemLeave, additionalMenu, isLoading }) => (
  <div
    key={title}
    className={'menu-item'}
    onMouseLeave={onItemLeave}
    onMouseOver={() => !type && !additionalMenu && onItemHover(title)}
  >
    <Link
      to={`/${url.toLowerCase()}`}
      className={'menu-item__text'}
      onClick={onItemLeave}
    >
      {title}
    </Link>
    {title === additionalMenu && !isLoading && <AdditionalMenu title={additionalMenu} />}
  </div>
);

const mapStateToProps = ({ api: { isLoading }, additionalMenu }) => ({
  isLoading,
  additionalMenu
});

const mapDispatchToProps = dispatch => ({
  onItemHover: item => dispatch(showAdditionalMenu(item)),
  onItemLeave: () => dispatch(hideAdditionalMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
