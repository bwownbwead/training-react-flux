
'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = Router.Link;

var Authors = React.createClass({

	getInitialState: function () {
		return {
			authors: []
		};
	},

	componentDidMount: function () {
		this.setState({
			authors: AuthorApi.getAllAuthors()
		});
	},

	render: function() {

		return (
			<div>
				<h1>Authors</h1>
				<AuthorList authors={ this.state.authors } />
				<Link to="author">Add an author</Link>
			</div>
		);
	}
});

module.exports = Authors;