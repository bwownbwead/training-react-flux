
'use strict';

var React = require('react');

var authorForm = React.createClass({
	render: function() {

		return (
			<form>
				<label htmlFor="firstName">First name: </label>
				<input onChange={ this.props.onChange } name="firstName" placeholder="First name" ref="firstName" type="text" value={ this.props.author.firstName } />
				<br />
				<label htmlFor="lastName">Last name: </label>
				<input onChange={ this.props.onChange } name="lastName" placeholder="Last name" ref="lastName" type="text" value={ this.props.author.lastName } />
				<br />

				<input type="submit" value="Save" />
			</form>
		);
	}
});

module.exports = authorForm;