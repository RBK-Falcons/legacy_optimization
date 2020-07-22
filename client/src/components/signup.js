import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// this is the sigup component which saves the user's info the they sign up
class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    idnumber: '',
    curType: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    occupation: '',
    phonenumber: '',
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('/createUser')
      .then((response) => {
        var {
          firstname,
          lastname,
          idnumber,
          curType,
          email,
          password,
          gender,
          age,
          occupation,
          phonenumber,
        } = response.data;

        this.setState({
          firstname,
          lastname,
          idnumber,
          curType,
          email,
          password,
          gender,
          age,
          occupation,
          phonenumber,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='signup'>
        <div className='auth'>
          <div className='overlay'>
            <div className='box'>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-content'>
                  <label className='la'>First name:</label>
                  <input
                    required
                    className='su'
                    type='text'
                    name='firstname'
                    placeholder='i.e. John'
                    value={this.state.firstname}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Last name:</label>
                  <input
                    required
                    className='su'
                    type='text'
                    name='lastname'
                    placeholder='i.e. Smith'
                    value={this.state.lastname}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>ID number:</label>
                  <input
                    className='su'
                    type='number'
                    name='idnumber'
                    placeholder='Enter ID'
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Currency Type:</label>
                  <select
                    value={this.state.curType}
                    name='curType'
                    onChange={this.handleChange.bind(this)}
                  >
                    <option>Choose...</option>
                    <option>USD (US$)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>

                <div className='form-content'>
                  <label className='la'>Email:</label>
                  <input
                    className='su'
                    type='text'
                    name='email'
                    placeholder='i.e. jsmith@gmail.com'
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Password:</label>
                  <input
                    className='su'
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Gender:</label>
                  <select
                    value={this.state.gender}
                    name='gender'
                    onChange={this.handleChange.bind(this)}
                  >
                    <option>Choose..</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='none'> Prefer not to say </option>
                  </select>
                </div>
                <div className='form-content'>
                  <label className='la'>Age:</label>
                  <input
                    className='su'
                    type='number'
                    min='18'
                    max='90'
                    name='age'
                    placeholder='Enter Your Age'
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Occupation:</label>
                  <input
                    className='su'
                    type='text'
                    name='occupation'
                    placeholder='Enter A Occupation'
                    value={this.state.occupation}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='form-content'>
                  <label className='la'>Phone number:</label>
                  <input
                    className='su'
                    type='tel'
                    placeholder='059xxxxxxx'
                    name='phonenumber'
                    value={this.state.phonenumber}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <button className='btn'>Next</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
