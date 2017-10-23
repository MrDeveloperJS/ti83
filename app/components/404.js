import React from 'react';

export class ErrorClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Contact System Admin</p>
      </div>
		);
	}
};
