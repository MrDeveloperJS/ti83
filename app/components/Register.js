import React from 'react';

export class RegisterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>Register</h1>
        <p>Sign-up for a new account</p>
      </div>
		);
	}
};
