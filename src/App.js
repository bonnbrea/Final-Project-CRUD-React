import React from 'react';
import './App.css';
import Home from './Components/Home';
import Trails from './Components/Trails';
import Packinglist from './Components/Packinglist';
import Membership from './Components/Membership';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

 function App() {
  return (
    <Router>
      <div>
        <ul className='nav'>
          <li>
            <Link to = "/home">Home</Link>
          </li>
          <li>
            <Link to = "/trails">Trails</Link>
          </li>
          <li>
            <Link to = "/packinglist">Packing</Link>
          </li>
          <li>
            <Link to = "/membership">Membership</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/trails">
            <Trails />
          </Route>
          <Route path="/packinglist">
            <Packinglist />
          </Route>
          <Route path="/membership">
            <Membership />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App; 
