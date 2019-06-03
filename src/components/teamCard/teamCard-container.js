import { connect } from 'react-redux';
import { hideAdditionalMenu } from '../../actions/additionalMenu';
import TeamCard from './teamCard';

const mapDispatchToProps = {
  hideAdditionalMenu
};

export default connect(
  null,
  mapDispatchToProps
)(TeamCard);
