import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post('/signin')
            .then((response) => {
                console.log(response.data);
                var { email, password } = response.data;
                this.setState({ email, password });
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {

        return (
            <div className="auth">
                <div className="overlay">
                    <div className='signin'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-content">
                                <label>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    placeholder="Enter E-mail"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-content">
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    placeholder="Enter Password"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <button className='btn'>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
