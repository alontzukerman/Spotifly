import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="routerNav">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/login">Login</Link></div>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* <div className="App">
<Header />
<Main />
</div> */}