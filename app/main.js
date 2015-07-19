'use strict';

var React = require('react');
var Feed = require('./modules/feed.jsx')

var App = React.createClass({

	getInitialState: function() {
		return {
			currentComponent: Feed
		};
	},

	openProfile: function() {
		var that = this;
		require.ensure([], function() {
			var Profile = require('./modules/profile.jsx');
			that.setState({
				currentComponent: Profile
			});
		});
	},

	render: function() {
		return (
			<div>
      	<a onClick={this.openProfile}>toggle</a>
      	<div>{this.state.currentComponent()}</div>
      </div>
		);
	}

});

React.render(<App/>, document.getElementById('app'));