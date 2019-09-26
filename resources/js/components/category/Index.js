import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Listing from './Listing';
import Add from './Add.js';
import Edit from './Edit.js';

export default class Index extends Component {
  render() {
    return(
    <div>
      <Router>
            <div className="container">
              <hr />
              <Link to="/category" className="btn btn-primary"> Listing </Link> &nbsp;
              <Link to="/category/add" className="btn btn-primary" > Add </Link>

              <Route exact path="/category" component={Listing} />
              <Route exact path="/category/add" component={Add} />
              <Route exact path="/category/edit/:id" component={Edit} />
            </div>
      </Router>
    </div>
  );
  }
}
