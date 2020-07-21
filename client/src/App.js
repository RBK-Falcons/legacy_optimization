import React from 'react';
import './App.css';
import Landing from './components/landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
