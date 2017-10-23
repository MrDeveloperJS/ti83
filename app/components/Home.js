import React from 'react';

export class HomeClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <hr />
        <h3>Test</h3>
        <p>Lorem ipsum...</p>
      </div>
		);
	}
};
