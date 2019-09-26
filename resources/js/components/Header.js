import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';


export default class Header extends Component {
  render() {
    return(
      <Router>
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                <Link className="navbar-brand" to="/">LaravelReact CRUD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/category">Category</Link>
                    </li>
                  </ul>
                </div>
                </div>
              </nav>

               <Route exact path='/' component={Home} />
               <Route exact path='/about' component={About} />
               <Route exact path='/category' component={Category} />
           </div>

    </ Router >
  );
  }
}
