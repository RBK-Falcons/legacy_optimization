import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Display extends React.Component {
  state = {
    creditcard: '',
    user: null,
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlesubmit(e) {
    e.preventDefault();
    const { creditcard } = this.state;
    axios
      .get(`/profile/${creditcard}`)
      .then((resp) => {
        this.setState({
          user: resp.data,
        });
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.user !== null) {
      return (
        <Redirect
          to={{
            pathname: '/userInfo',
            state: {
              user: this.state.user,
            },
          }}
        />
      );
    }
    return (
      <div className='display'>
        <div className='overlay'>
          <div>
            <form onSubmit={this.handlesubmit.bind(this)}>
              <label>Enter your credit card number</label>
              <input
                type='number'
                name='creditcard'
                placeholder='Enter Card Number'
                value={this.state.creditcard}
                onChange={this.handleChange.bind(this)}
              />
              <button className='btn'>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
