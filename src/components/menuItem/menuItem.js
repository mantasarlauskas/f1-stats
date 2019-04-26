import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideAdditionalMenu, showAdditionalMenu } from '../../actions/additionalMenu';
import AdditionalMenu from '../additionalMenu';
import './styles.scss';

const MenuItem = ({
  type,
  title,
  url,
  onItemHover,
  onItemLeave,
  additionalMenu,
  isLoading,
  onClose
}) => (
  <div
    key={title}
    className={'menu-item'}
    onMouseLeave={onItemLeave}
    onMouseOver={() => !type && !additionalMenu && onItemHover(title)}
  >
    <Link
      to={`/${url.toLowerCase()}`}
      className={'menu-item__text'}
      onClick={window.innerWidth > 576 ? onItemLeave : onClose}
    >
      {title}
    </Link>
    {title === additionalMenu && !isLoading && <AdditionalMenu title={additionalMenu} />}
  </div>
);

MenuItem.propTypes = {
  type: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onItemHover: PropTypes.func.isRequired,
  onItemLeave: PropTypes.func.isRequired,
  additionalMenu: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const mapStateToProps = ({ api: { isLoading }, additionalMenu }) => ({
  isLoading,
  additionalMenu
});

const mapDispatchToProps = dispatch => ({
  onItemHover: item => dispatch(showAdditionalMenu(item)),
  onItemLeave: () => dispatch(hideAdditionalMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
