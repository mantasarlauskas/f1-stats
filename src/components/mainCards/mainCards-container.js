import { connect } from 'react-redux';
import MainCards from './mainCards';

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(MainCards);
