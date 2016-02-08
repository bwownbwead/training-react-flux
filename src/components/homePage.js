
'use strict';

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>This is the heading</h1>
				<p>React, React Router and Flux</p>
			</div>
		);
	}
});

module.exports = Home;