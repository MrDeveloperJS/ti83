import React from 'react';

export class LoginClass extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', errorMessage: '' };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    if (this.state.username === 'admin' && this.state.password === 'pass') {
      this.setState({errorMessage: ''});
      this.props.updateUserDetails(this.state.username, this.state.password);
    } else {
      this.setState({errorMessage: 'Invalid Username/Password'});
      this.props.updateUserDetails('', '');
    }
  }

	render() {
		return (
      <div>
        <div class="wrapper">
          <form class="form-signin">
            <div class="text-center text-danger"><p>{this.state.errorMessage}</p></div>
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" onChange={(e) => this.setState({username:e.target.value})} />
            <br />
            <input type="password" class="form-control" name="password" placeholder="Password" required="" onChange={(e) => this.setState({password:e.target.value})} />
            <br />
            <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLogin}>Login</button>
          </form>
        </div>
      </div>
		);
	}
};
