import React from 'react';
// import axios from 'axios';

// this is the deposite component.
class Convert extends React.Component {
  state = {};

  render() {
    return (
      <div className='convert'>
        <div className='overlay'>
          <div>
            <form>
              <select className='ct'>
                <option>Choose...</option>
                <option>USD (US$)</option>
                <option>EUR (â‚¬)</option>
                <option>GBP (Â£)</option>
              </select>

              <label>To</label>

              <select className='ct'>
                <option>Choose...</option>
                <option>USD (US$)</option>
                <option>EUR (â‚¬)</option>
                <option>GBP (Â£)</option>
              </select>
              <button className='btn'>Convert</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Convert;
