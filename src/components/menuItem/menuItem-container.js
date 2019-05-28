import { connect } from 'react-redux';
import { hideAdditionalMenu, showAdditionalMenu } from '../../actions/additionalMenu';
import MenuItem from './menuItem';

const mapStateToProps = ({ api: { isLoading }, additionalMenu }) => ({
  isLoading,
  additionalMenu
});

const mapDispatchToProps = {
  showAdditionalMenu,
  hideAdditionalMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
