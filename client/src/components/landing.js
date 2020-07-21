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
            <span style={{ color: '#e74c3c', fontSize: '113px' }} className='x'>
              X
            </span>
            change
          </h2>
          <button className='first'>
            <Link to='/signup'>Sign Up</Link>
          </button>
          <br></br>
          <button className='first'>
            <Link to='/signin'>Sign In</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Landing;
