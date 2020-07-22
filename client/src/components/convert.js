import React from 'react';
import axios from 'axios';

// this is the deposite component.
class Convert extends React.Component {
    state = {}


    render() {

        return (

            <div className="convert">
                <div className="overlay">
                    <div>
                        <form>
                            <input type='text' placeholder='Enter Amount' />
                            <select className="ct">
                                <option>Choose...</option>
                                <option>USD (US$)</option>
                                <option>EUR (â‚¬)</option>
                                <option>GBP (Â£)</option>
                            </select>

                            <p>To</p>

                            <select className="ct">
                                <option>Choose...</option>
                                <option>USD (US$)</option>
                                <option>EUR (â‚¬)</option>
                                <option>GBP (Â£)</option>
                            </select>
                            <button className='btn'>
                                Convert
                            </button>
                        </form>
                        <p className='converter'>154.515$</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Convert;
