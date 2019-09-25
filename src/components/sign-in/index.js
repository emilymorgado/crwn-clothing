import React, { Component } from 'react';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';
import './index.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    console.log('RAN', event)
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    console.log('change')
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">
            Sign in
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
