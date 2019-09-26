import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
    <div>
      <div className="container">
        <div className="jumbotron mt-4">
            <h1 className="display-4">About Us Page!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
      </div>
    </div>
  );
  }
}
