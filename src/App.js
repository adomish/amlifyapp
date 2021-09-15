import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PrespectiveCameraScense from './pages/PerspectiveCameraScense';
import Scense from './pages/Scense';
import Scroll from './pages/Scroll';
import Three from './pages/Three';
import Strong from './pages/cashbox/StrongBox'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/three'>three</Link>
            </li>
            <li>
              <Link to='/scense'>three</Link>
            </li>
            <li>
              <Link to='/camera'>camera</Link>
            </li>
            <li>
              <Link to='/scroll'>scroll</Link>
            </li>
            <li>
              <Link to='/strongbox'>コグチキン操作</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/three'>
              <Three />
            </Route>
            <Route path='/scense'>
              <Scense />
            </Route>
            <Route path='/camera'>
              <PrespectiveCameraScense />
            </Route>
            <Route path='/scroll'>
              <Scroll />
            </Route>
            <Route path='/strongbox'>
              <Strong/>
            </Route>
          </Switch>
        </div>
      </Router>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App);
