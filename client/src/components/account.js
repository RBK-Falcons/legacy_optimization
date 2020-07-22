import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Account extends React.Component {
  state = {
    creditcard: '',
    total: '',
    user: null,
    isVerify: false,
  };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/');
      return;
    }

    const { user } = this.props.location.state;
    this.setState({
      user,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var { creditcard, total } = this.state;
    axios
      .post('/verifyCD', {
        creditcard,
        total,
      })
      .then((res) => {
        this.setState({
          isVerify: true,
        });
        console.log('Creditcard verified succesfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isVerify) {
      return (
        <Redirect
          to={{
            pathname: `/profile`,
            state: {
              user: this.state.user,
            },
          }}
        />
      );
    }
    return (
      <div className='account'>
        <div className='auth'>
          <div className='overlay'>
            <div>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Credit Card number</label>
                <input
                  type='number'
                  name='creditcard'
                  placeholder='Enter Card Number'
                  value={this.state.creditcard}
                  onChange={this.handleChange.bind(this)}
                />

                <label>Balance</label>
                <input
                  type='number'
                  name='total'
                  placeholder='Enter Balance'
                  value={this.state.total}
                  onChange={this.handleChange.bind(this)}
                />
                <button className='btn'>Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
