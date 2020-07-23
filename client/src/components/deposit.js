import React from 'react';
import axios from 'axios';

// this is the deposite component.
class Deposit extends React.Component {
  state = {
    currencyType: '',
    number: '',
    creditcard: '',
    userCurType: '',
    allCur: [],
    msg: '',
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
    axios
      .get('/getAllCur')
      .then((response) => {
        var x = Object.keys(response.data);
        var y = [];
        for (var i in x) {
          y.push(x[i].substring(3));
        }
        this.setState({
          allCur: y,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var { currencyType, number, creditcard, userCurType } = this.state;
    axios
      .post('/convert', {
        from: currencyType,
        to: userCurType,
        amount: number,
      })
      .then((response) => {
        return response.data;
      })
      .then((amount) => {
        axios
          .put('/deposit', {
            creditcard,
            amount,
          })
          .then((resp) => {
            this.setState({
              currencyType: '',
              number: '',
              creditcard: '',
              msg: resp.data,
            });
          })
          .catch((err) => {
            console.log('--->', err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='deposit'>
        <div className='overlay'>
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Credit card number</label>
              <input
                type='number'
                name='creditcard'
                placeholder='Enter Card Number'
                value={this.state.creditcard}
                onChange={this.handleChange.bind(this)}
              />
              <label> Enter the amount of your deposit </label>
              <input
                type='number'
                name='number'
                placeholder='Enter Amount of Deposit'
                value={this.state.number}
                onChange={this.handleChange.bind(this)}
              />
              <label> Enter Currency Type </label>
              <select
                value={this.state.currencyType}
                name='currencyType'
                onChange={this.handleChange.bind(this)}
              >
                <option>Choose...</option>
                {this.state.allCur.map((e, i) => {
                  return <option key={i}>{e}</option>;
                })}
              </select>
              <h2 className='alert'>{this.state.msg}</h2>
              <button className='btn'>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Deposit;
