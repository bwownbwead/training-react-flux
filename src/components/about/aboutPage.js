
'use strict';

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>The about page!</h1>
				<p>This is a list of stuff</p>
				<ul>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;