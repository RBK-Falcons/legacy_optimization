import React from 'react';

class Profile extends React.Component {
  state = {
    user: null,
  };

  // componentDidMount() {
  //     if (this.props.location.state === undefined) {
  //       this.props.history.push('/');
  //       return;
  //     }

  //     const { user } = this.props.location.state;
  //     this.setState({
  //       user,
  //     });
  //   }

  render() {
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

                  <li>Fisrt Name: Ahmed</li>
                  <li>Last Name: Abd</li>
                  <li>Age: 33</li>
                  <li>Joining Date: -</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
