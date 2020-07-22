import React from 'react';
import { Link } from 'react-router-dom';

// this is the main page.
class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className='overlay'>
          {/* <Navbar/> */}
          <h2 className='title'>
            <span className='x'>X</span>
            change
          </h2>
          <Link to='/signup' className='first'>
            Sign Up
          </Link>
          <Link to='/signin' className='first'>
            Sign In
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
