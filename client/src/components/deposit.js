import React from 'react';
import axios from 'axios';

// this is the deposite component.
class Deposit extends React.Component {
    state = {
        currencyType: '',
        number: '',
        creditcard: ''
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        axios.post('/deposit')
            .then((res) => {
                var { currencyType, number, creditcard } = res.data;

                this.setState({ creditcard, number, currencyType })

            }).catch((err) => {
                console.log(err);
            });
    }


    render() {

        return (

            <div className="deposit">
                <div className="overlay">
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
                                <option>USD (US$)</option>
                                <option>EUR (â‚¬)</option>
                                <option>GBP (Â£)</option>
                            </select>
                            <button className='btn'>
                                Confirm
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Deposit;
