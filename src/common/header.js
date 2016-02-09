
'use strict';

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<nav>
				<a href="/">Logo</a>

				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/#about">About</a></li>
					<li><a href="/#authors">Authors</a></li>
				</ul>
			</nav>
		);
	}
});

module.exports = Header;