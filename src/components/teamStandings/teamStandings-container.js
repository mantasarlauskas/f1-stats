import { connect } from 'react-redux';
import TeamStandings from './teamStandings';

const mapStateToProps = ({ api: { teamStandings, isLoading } }) => ({
  teamStandings,
  isLoading
});

export default connect(mapStateToProps)(TeamStandings);
