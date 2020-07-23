import React from 'react';
import Change from './api';
import { Link } from 'react-router-dom';

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
    return (
      <div className='profile'>
        <div className='overlay'>
          <div>
            <div className='left'>
              <Link
                className='btn'
                to={{
                  pathname: '/deposit',
                  state: {
                    userCurType:
                      this.state.user !== null ? this.state.user.curType : '',
                  },
                }}
              >
                Deposit
              </Link>
              <Link
                className='btn'
                to={{
                  pathname: '/withdraw',
                  state: {
                    userCurType:
                      this.state.user !== null ? this.state.user.curType : '',
                  },
                }}
              >
                Withdraw
              </Link>
              <Link
                className='btn'
                to={{
                  pathname: '/transfer',
                  state: {
                    userCurType:
                      this.state.user !== null ? this.state.user.curType : '',
                  },
                }}
              >
                Transfer
              </Link>
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
                    First Name:{' '}
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
