import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Main from '../main';
import Header from '../header';
import Driver from '../driver';
import Team from '../team';
import DriverStandings from '../driverStandings';
import TeamStandings from '../teamStandings';
import Footer from '../footer';
import Results from '../results';
import RaceResults from '../raceResults';
import Schedule from '../schedule';
import Teams from '../teams';
import Drivers from '../drivers';
import NoMatch from '../noMatch';
import Favourites from '../favourites';
import './styles.scss';

const App = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className={'page'}>
        <Header />
        <div className={'content'}>
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route path={'/driver-standings'} component={DriverStandings} />
            <Route path={'/team-standings'} component={TeamStandings} />
            <Route path={'/driver/:id'} component={Driver} />
            <Route path={'/team/:id'} component={Team} />
            <Route exact path={'/results'} component={Results} />
            <Route path={'/results/:id'} component={RaceResults} />
            <Route path={'/schedule'} component={Schedule} />
            <Route path={'/teams'} component={Teams} />
            <Route path={'/drivers'} component={Drivers} />
            <Route path={'/favourites'} component={Favourites} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default App;
