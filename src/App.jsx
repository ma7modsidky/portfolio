import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import SettingsBox from './components/SettingsBox/SettingsBox';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <SettingsBox/>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Header className='header' />
              <div className='main container_shadow'>
                <Switch>
                  <Route path='/' exact><Home /></Route>
                  <Route path='/portfolio'><Portfolio /></Route>
                  <Route path='/skills'><Resume /></Route>
                  <Route path='/contact'><Contact /></Route>
                </Switch>
              </div>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;