import React from 'react';
import './App.css';
import Landing from './components/landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <section className='container'>
          {/* <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/user' component={Account} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/withdraw' component={Withdraw} />
          <Route exact path='/deposit' component={Diposit} />
          <Route exact path='/transfer' component={Transfer} />
          <Route exact path='/display' component={Display} />
          <Route exact path='/userinfo' component={Info} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact-us' component={Contact} /> */}
        </section>
      </div>
    </Router>
  );
}

export default App;
