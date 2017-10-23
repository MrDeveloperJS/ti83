import React from 'react';

export class SideNavClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
		return (
      <div class="col-sm-2 sidenav">
        <p><a onClick={ (e) => this.props.onLinkClick(e, 'category', 'ti-83') }>TI-83</a></p>
        <p><a onClick={ (e) => this.props.onLinkClick(e, 'category', 'ti-83+') }>TI-83+</a></p>
        <p><a onClick={ (e) => this.props.onLinkClick(e, 'category', 'ti-84') }>TI-84</a></p>
        <p><a onClick={ (e) => this.props.onLinkClick(e, 'category', 'ti-85') }>TI-86</a></p>
      </div>
		);
	}
};
