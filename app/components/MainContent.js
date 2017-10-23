import React from 'react';
import { HomeClass } from './Home.js';
import { ContactClass } from './Contact.js';
import { ErrorClass } from './404.js';
import { AboutClass } from './About.js';
import { RegisterClass } from './Register.js';
import { LoginClass } from './Login.js';
import { CategoryClass } from './Category.js';

export class MainContentClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { test: '' };
  }

	render() {
    let currentContent = this.props.currentContent;

    if (currentContent === "home") {
      return (
        <div class="col-sm-8 text-left">
          <HomeClass />
        </div>
  		);
    } else if (currentContent === "contact") {
      return (
        <div class="col-sm-8 text-left">
          <ContactClass />
        </div>
  		);
    } else if (currentContent === "about") {
      return (
        <div class="col-sm-8 text-left">
          <AboutClass />
        </div>
  		);
    } else if (currentContent === "register") {
      return (
        <div class="col-sm-8 text-left">
          <RegisterClass />
        </div>
  		);
    } else if (currentContent === "login") {
      return (
        <div class="col-sm-8 text-left">
          <LoginClass updateUserDetails={this.props.updateUserDetails}/>
        </div>
  		);
    } else if (currentContent === "category") {
      return (
        <div class="col-sm-8 text-left">
          <CategoryClass subPage={this.props.subPage} />
        </div>
  		);
    } else {
      return (
        <div class="col-sm-8 text-left">
          <ErrorClass />
        </div>
  		);
    }


	}
};
