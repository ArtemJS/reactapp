import React from 'react';
import axios from 'axios';
import './authForm.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state
        axios.post(`https://us-central1-mercdev-academy.cloudfunctions.net/login`, { email, password })
            .then(res => {
                console.log(res)
                this.props.callback(res.data)
            })
    }

    render() {
        return (
                <div className="auth">
                    <div className="auth__form">
                        <form name="validate" encType="application/json" onSubmit={this.handleSubmit}>
                            <div className="form__title">Log in</div>
                            <div className="form__input">
                                <input
                                    onChange={this.handleUserInput}
                                    placeholder="E-Mail"
                                    name="email"
                                    value={this.state.email}
                                    id="email"
                                    minLength="3"
                                    required
                                />
                            </div>
                            <div className="form__input">
                                <input
                                    onChange={this.handleUserInput}
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    pattern="[a-zA-Z0-9]+"
                                    minLength="3"
                                    maxLength="8"
                                    required
                                />
                            </div>
                            <div className="form__err" id="form__err"></div>
                            <div className="form__button">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}


export default Form;
