import React from 'react';
import axios from 'axios';

class Account extends React.Component {
    state = {
        creditcard: '',
        total: ''
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post('/verifyCardNumber')
            .then((res) => {
                var { creditcard, total } = res.data;
                this.setState({ creditcard, total });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="account">
                <div className="auth">
                    <div className="overlay">
                        <div>
                            <form>
                                <label>Credit Card number</label>
                                <input
                                    type='number'
                                    name='creditcard'
                                    placeholder='Enter Card Number'
                                    value={this.state.creditcard}
                                    onChange={this.handleChange.bind(this)}
                                />

                                <label>Balance</label>
                                <input
                                    type='number'
                                    name='total'
                                    placeholder='Enter Balance'
                                    value={this.state.total}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <button className='btn'>
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Account;
