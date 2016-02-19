"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorsPage')} />
    <Route name="author" handler={require('./components/authors/addAuthorPage')} />
    <Route name="about" path="change-to-about-url" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./common/notFoundPage')} />
    <Redirect from="no-longer-valid" to="about" />
  </Route>
);

module.exports = routes;