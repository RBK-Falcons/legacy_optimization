import React from 'react';
import axios from 'axios';
import $ from 'jquery';

// this is the deposite component.
class Convert extends React.Component {
  state = {
    amount: '',
    from: '',
    to: '',
    allCur: [],
  };

  componentDidMount() {
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
    const { amount, from, to } = this.state;
    axios
      .post('/convert', { amount, from, to })
      .then((response) => {
        $('.converter').text(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='convert'>
        <div className='overlay'>
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type='text'
                placeholder='Enter Amount'
                name='amount'
                onChange={this.handleChange.bind(this)}
              />
              <select
                className='ct'
                onChange={this.handleChange.bind(this)}
                name='from'
              >
                <option>Choose...</option>
                {this.state.allCur.map((e, i) => {
                  return <option key={i}>{e}</option>;
                })}
              </select>

              <p>To</p>

              <select
                className='ct'
                onChange={this.handleChange.bind(this)}
                name='to'
              >
                <option>Choose...</option>
                {this.state.allCur.map((e, i) => {
                  return <option key={i}>{e}</option>;
                })}
              </select>
              <button className='btn'>Convert</button>
            </form>
            <p className='converter'>0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Convert;
