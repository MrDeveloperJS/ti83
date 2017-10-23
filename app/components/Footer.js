import React from 'react';

export class FooterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <footer class="footer container-fluid text-center">
        <p>Footer Text</p>
      </footer>

		);
	}
};
