import React from 'react';
import './App.css';
import Home from './Components/Home';
import Trails from './Components/Trails';
import Packinglist from './Components/Packinglist';
import Membership from './Components/Membership';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
// used router in the function app instead of the switch I used before
 function App() {
  //used react-bootstrap along with css to style the navbar. The only thing I couldn't fix was being able to press anywhere in the box to switch pages. Instead, the user has to click right on the text to switch pages. 
  return (
    <Router>  
      <div>
        <Container>
        <ButtonGroup className='nav'>
          <Button variant="outline-secondary">
            <Link to="/home">Home</Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/trails">Trails</Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/packinglist">Packing</Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/membership">Membership</Link>
          </Button>
        </ButtonGroup>
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
        </Container>
      </div>
    </Router>
    
  )
}
export default App; 
