import { connect } from 'react-redux';
import { teamSelector } from '../../selectors/api';
import TeamRow from './teamRow';

const mapStateToProps = (state, { constructorId }) => ({
  team: teamSelector(state, constructorId)
});

export default connect(mapStateToProps)(TeamRow);
