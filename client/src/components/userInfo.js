import React from 'react';

class Info extends React.Component {
    state = {}


    render() {
        return (
            <div className="display-info">
                <div className="overlay">
                    <div>
                        <h2>User Info</h2>
                        <ul>
                            <li>Total: 2.592.621$</li>
                            <li>Last deposit: 2.000$</li>
                            <li>Last withdraw: 1.516$</li>
                        </ul>
                        <button className='btn'>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
