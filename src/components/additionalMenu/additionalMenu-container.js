import { connect } from 'react-redux';
import AdditionalMenu from './additionalMenu';

const mapStateToProps = ({ api: { drivers, teams } }) => ({
  drivers,
  teams
});

export default connect(mapStateToProps)(AdditionalMenu);
