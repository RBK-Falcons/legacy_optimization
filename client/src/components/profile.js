import React from 'react';
import Change from './api';

class Profile extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/');
      return;
    }

    const { user } = this.props.location.state;
    console.log(user);
    this.setState({
      user: user[0],
    });
  }

  render() {
    console.log(this.state.user);
    return (
      <div className='profile'>
        <div className='overlay'>
          <div>
            <div className='left'>
              <a href='/deposit' className='btn'>
                Deposit
              </a>
              <a href='/withdraw' className='btn'>
                Withdraw
              </a>
              <a href='/transfer' className='btn'>
                Transfer
              </a>
              <a href='/display' className='btn'>
                Display
              </a>
              <a href='/convert' className='btn'>
                Convert
              </a>
              <div className='info'>
                <ul>
                  <h2>User's Info</h2>
                  <li>
                    First Name:
                    {this.state.user !== null ? this.state.user.firstname : ''}
                  </li>
                  <li>
                    Last Name:{' '}
                    {this.state.user !== null ? this.state.user.lastname : ''}
                  </li>
                  <li>
                    Age: {this.state.user !== null ? this.state.user.age : ''}
                  </li>
                  <li>
                    Balance:{' '}
                    {this.state.user !== null ? this.state.user.total : ''}$
                  </li>
                  <li>
                    Joining Date:{' '}
                    {this.state.user !== null
                      ? this.state.user.signin.substring(0, 10)
                      : ''}
                  </li>
                </ul>
              </div>
            </div>
            <div className='right'>
              <Change />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
