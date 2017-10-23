import React from 'react';

export class ContentClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div>
        <h1>Content Page</h1>
        <p>Content informational page</p>
      </div>
		);
	}
};
