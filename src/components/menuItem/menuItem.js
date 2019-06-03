import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdditionalMenu from '../additionalMenu';
import './styles.scss';

const mediumSize = 992;
const smallSize = 576;

const MenuItem = ({
  type,
  title,
  url,
  showAdditionalMenu,
  hideAdditionalMenu,
  additionalMenu,
  isLoading,
  onClose
}) => (
  <div
    key={title}
    className={'menu-item'}
    onMouseLeave={() => window.innerWidth > mediumSize && additionalMenu && hideAdditionalMenu()}
    onMouseOver={() => (
      window.innerWidth > mediumSize && !type && !additionalMenu && showAdditionalMenu(title)
    )}
  >
    <Link
      to={`/${url.toLowerCase()}`}
      className={'menu-item__text'}
      onClick={window.innerWidth > smallSize ? hideAdditionalMenu : onClose}
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
  showAdditionalMenu: PropTypes.func.isRequired,
  hideAdditionalMenu: PropTypes.func.isRequired,
  additionalMenu: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MenuItem;
