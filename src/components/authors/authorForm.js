
'use strict';

var React = require('react');
var TextInput = require('../../common/textInput');

var authorForm = React.createClass({
	render: function() {

		return (
			<form>
				<TextInput name="firstName" label="First name" onChange={ this.props.onChange } />
				<TextInput name="lastName" label="Last name" onChange={ this.props.onChange } />

				<input type="submit" value="Save" />
			</form>
		);
	}
});

module.exports = authorForm;