import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Trails from './Components/Trails';
import Packinglist from './Components/Packinglist';
import Membership from './Components/Membership';

 function App() {
  let component 
  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break
    case "/trails":
     component = <Trails />
     break
    case "/packinglist":
      component = <Packinglist />
      break
    case "/membership":
        component = <Membership />
        break 
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  )
}
export default App; 
