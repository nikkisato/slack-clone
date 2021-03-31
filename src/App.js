import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className='app'>
      <Router>
        <>
          <Switch>
            <Route path='/' exact>
              <Header />
              <h1>This is a home page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
