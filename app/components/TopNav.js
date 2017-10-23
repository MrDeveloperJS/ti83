import React from 'react';

export class TopNavClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: '' };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" onClick={e => this.props.onLinkClick(e, 'home')}>Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a onClick={e => this.props.onLinkClick(e, 'home')}>Home</a></li>
              <li><a onClick={e => this.props.onLinkClick(e, 'about')}>About</a></li>
              <li><a onClick={e => this.props.onLinkClick(e, 'contact')}>Contact Us</a></li>
              <li><a onClick={e => this.props.onLinkClick(e, 'register')}>Register</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active">Welcome {this.props.currentUser.username}</li>
              <li><a onClick={e => this.props.onLinkClick(e, 'login')}><span className="glyphicon glyphicon-log-in" /> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
