import React from 'react';

export class ContactClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>Contact Us</h1>
        <p>Contact us form here</p>
      </div>
		);
	}
};
