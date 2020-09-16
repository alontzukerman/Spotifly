import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import OneSong from './OneSong';
import OneArtist from './OneArtist';
import OneAlbum from './OneAlbum';
import OnePlaylist from './OnePlaylist';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/song/:id' exact component={OneSong}/>
          <Route path='/artist/:id' exact component={OneArtist}/>
          <Route path='/album/:id' exact component={OneAlbum}/>
          <Route path='/playlist/:id' exact component={OnePlaylist}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
