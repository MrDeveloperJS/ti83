import React from 'react';

export class AboutClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>About Us</h1>
        <p>Summary of website here</p>
      </div>
		);
	}
};
