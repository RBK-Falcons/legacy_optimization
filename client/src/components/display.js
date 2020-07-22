import React, { Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Display extends React.Component {
    state = {
        creditcard: ''
    }



    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    // handlesubmit(e) {
    //     e.preventDefault();
    //     axios.get('display')
    //         .then((res) => {
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }


    render() {

        return (
            <div className="display">
                <div className="overlay">
                    <div>
                        <form>
                            <label>Enter your credit card number</label>
                            <input
                                type='number'
                                name='creditcard'
                                placeholder='Enter Card Number'
                                value={this.state.creditcard}
                                onChange={this.handleChange.bind(this)}
                            />
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

export default Display;
