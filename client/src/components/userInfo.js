import React from 'react';

class Info extends React.Component {
  state = {
    total: '',
    lastdeposite: '',
    lastwitdraw: '',
  };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/display');
      return;
    }
    const { user } = this.props.location.state;
    this.setState({
      total: user.total,
      lastdeposite: user.lastdeposite,
      lastwitdraw: user.lastwitdraw,
    });
  }

  render() {
    return (
      <div className='display-info'>
        <div className='overlay'>
          <div>
            <h2>User Info</h2>
            <ul>
              <li>Total: {this.state.total}</li>
              <li>Last deposit: {this.state.lastdeposite}</li>
              <li>Last withdraw: {this.state.lastwitdraw}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
