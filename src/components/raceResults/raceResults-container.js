import { connect } from 'react-redux';
import RaceResults from './raceResults';

const mapStateToProps = ({ api: { isLoading } }) => ({
  isMainDataLoading: isLoading
});

export default connect(mapStateToProps)(RaceResults);
