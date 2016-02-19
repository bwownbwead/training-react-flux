
'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');

var AddAuthor = React.createClass({
	
	getInitialState: function () {
		return { 
			author: {
				ID: '',
				firstName: '',
				lastName: ''
			}
		};
	},

	handleFormChange: function (event) {
		var textValue = event.target.value;
		var field = event.target.name;
		
		this.state.author[field] = textValue;
		console.log(this.state); 
		return this.setState( { author: this.state.author } );
	},

	render: function() {
		return (
			<div>
				<h1>Add an Author</h1>
				<AuthorForm author={ this.state.author } onChange={ this.handleFormChange } />
			</div>
		);
	}
});

module.exports = AddAuthor;