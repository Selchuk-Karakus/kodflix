import React from 'react';
import Gallery from './components/Gallery';
import './App.css';
import Details from './components/details/Details';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Gallery} />
        <Route path='/details' component={Details} />
      </div>
    </ Router>
  );
}



export default App;
