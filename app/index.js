var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import { MainContentClass } from './components/MainContent.js';
import { SideNavClass } from './components/SideNav.js';
import { TopNavClass } from './components/TopNav.js';
import { FooterClass } from './components/Footer.js';
import { AdClass } from './components/Ads.js';

class IndexClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentContent: "home",
      subPage: '',
      userDetails: {username: 'abc', password: '123'}
    };
    this.onLinkClick = this.onLinkClick.bind(this);
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  onLinkClick(e, page, subPage) {
    e.preventDefault();
    this.setState({
      currentContent: page,
      subPage: subPage
    });
  }

  updateUserDetails(username, password) {
    var newUserDetails = {'username': username, 'password': password};
    this.setState({userDetails: newUserDetails});
  }

	render() {
		return (
			<div>
          <TopNavClass onLinkClick={this.onLinkClick} currentUser={this.state.userDetails} />
          <div class="container-fluid text-center">
            <div class="row content">
              <SideNavClass onLinkClick={this.onLinkClick} />
              <MainContentClass currentContent={this.state.currentContent} subPage={this.state.subPage} updateUserDetails={this.updateUserDetails} />
              <AdClass />
            </div>
          </div>
          <FooterClass />
      </div>
		);
	}
};

ReactDOM.render(
	<IndexClass />,
	document.getElementById('app')
);
