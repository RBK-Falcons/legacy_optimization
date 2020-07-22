import React from 'react';
import './App.css';
import Landing from './components/landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Account from './components/account';
import Profile from './components/profile';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import Transfer from './components/transfer';
import Display from './components/display';
import Convert from './components/convert';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/verifyCardNumber" component={Account} />
        <Route path="/profile" component={Profile} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/display" component={Display} />
        <Route path="/convert" component={Convert} />
      </div>
    </Router>
  );
}

export default App;
