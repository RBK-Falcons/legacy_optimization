import React from 'react';
import axios from 'axios';

class Transfer extends React.Component {
    state = {
        sender: '',
        reciever: '',
        amount: ''
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/transfer')
            .then((res) => {
                let { sender, reciever, amount } = res.data;
                this.setState({ sender, reciever, amount });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {

        return (
            <div className="transfer">
                <div className="overlay">
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
