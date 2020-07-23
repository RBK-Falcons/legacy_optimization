import React from 'react';
import axios from 'axios';

class Transfer extends React.Component {
  state = {
    sender: '',
    reciever: '',
    amount: '',
    userCurType: '',
  };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/');
      return;
    }
    const { userCurType } = this.props.location.state;
    this.setState({
      userCurType,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { sender, reciever, amount, userCurType } = this.state;
    axios
      .put('/withdraw', {
        creditcard: sender,
        amount,
      })
      .then(() => {
        return axios.get(`/user/${reciever}`);
      })
      .then((response) => {
        const to = response.data[1];
        axios
          .post('/convert', {
            from: userCurType,
            to,
            amount,
          })
          .then((resp) => {
            return resp.data;
          })
          .catch((err) => {
            throw new Error("The amount didn't convert");
          })
          .then((amount) => {
            var creditcard = response.data[0];
            return axios.put('/deposit', {
              creditcard,
              amount,
            });
          })
          .then(() => {
            this.setState({
              sender: '',
              reciever: '',
              amount: '',
            });
          })
          .catch((err) => {
            throw new Error('Failed to deposit');
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className='transfer'>
        <div className='overlay'>
          <div>
            <h3> Transfer </h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label> Please enter your credit card number: </label>
              <input
                type='number'
                name='sender'
                placeholder='Enter Your Card Number'
                value={this.state.sender}
                onChange={this.handleChange.bind(this)}
              ></input>

              <label> Reciever's ID number: </label>
              <input
                type='number'
                name='reciever'
                placeholder='Enter Reciever ID'
                value={this.state.reciever}
                onChange={this.handleChange.bind(this)}
              ></input>

              <label> Amount of money you would like to transfer: </label>
              <input
                type='number'
                name='amount'
                placeholder='Enter Amount for Transfer'
                value={this.state.amount}
                onChange={this.handleChange.bind(this)}
              ></input>

              <button className='btn'>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
