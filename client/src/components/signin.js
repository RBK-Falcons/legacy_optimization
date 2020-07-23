import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    user: null,
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post('/signin', {
        email,
        password,
      })
      .then((response) => {
        //console.log(response);
        this.setState({ user: response.data });
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
            pathname: '/profile',
            state: {
              user: this.state.user,
            },
          }}
        />
      );
    }
    return (
      <div className='auth'>
        <div className='overlay'>
          <div className='signin'>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className='form-content'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  placeholder='Enter E-mail'
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className='form-content'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  value={this.state.password}
                  placeholder='Enter Password'
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <button className='btn'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
