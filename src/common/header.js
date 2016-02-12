
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="app">Logo</Link>

				<ul>
					<li><Link to="app">Home</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="authors">Authors</Link></li>
				</ul>
			</nav>
		);
	}
});

module.exports = Header;