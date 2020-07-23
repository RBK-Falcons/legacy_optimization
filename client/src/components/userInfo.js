import React from 'react';

class Info extends React.Component {
  state = {
    total: '',
    lastdeposite: '',
    lastwitdraw: '',
    curType:'',
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
      curType:user.curType
    });
  }

  render() {
    return (
      <div className='display-info'>
        <div className='overlay'>
          <div>
            <h2>User Info</h2>
            <ul>
              <li>Total: {this.state.total}  {this.state.curType}</li>
              <li>Last deposit: {this.state.lastdeposite} {this.state.curType}</li>
              <li>Last withdraw: {this.state.lastwitdraw} {this.state.curType}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
