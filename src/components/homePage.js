
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>This is the heading</h1>
				<p>React, React Router and Flux</p>
				<Link to="authors">A test link to the authors page</Link>
			</div>
		);
	}
});

module.exports = Home;