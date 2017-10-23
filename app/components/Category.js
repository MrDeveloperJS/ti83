import React from 'react';

export class CategoryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: '' };
  }

  get name() {
    return (
      <div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card">
          <img data-src="holder.js/100px280/thumb" alt="100%x280" src="http://via.placeholder.com/300" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;" />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Main Category Page</h1>
        <p>Main Category Directory for {this.props.subPage}</p>
        {this.name}
      </div>
    );
  }
}
