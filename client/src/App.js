import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
