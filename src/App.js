import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import RestaurantsCreate from './components/RestaurantsCreate';
import RestaurantsLogin from './components/RestaurantsLogin';
import RestaurantsList from './components/RestaurantsList';
import RestaurantsSearch from './components/RestaurantsSearch';
import RestaurantsUpdate from './components/RestaurantsUpdate';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/list">Listing</Link>
            <Link to="/create">Create</Link>
            <Link to="/search">Search</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <RestaurantsList />
        </Route>
        <Route path="/create">
          <RestaurantsCreate />
        </Route>
        <Route path="/search">
          <RestaurantsSearch />
        </Route>
        <Route path="/login"
          render={props => (
          <RestaurantsLogin {...props}/>
          )}
        >
        </Route>
        <Route path="/update/:id"
        render={props=> (
          <RestaurantsUpdate {...props} />
        )}
        >
        </Route>
      </Router>
    </div>
  );
}

export default App;
