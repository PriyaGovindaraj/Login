/** @jsx React.DOM */
var React = require('react/addons');
var CreateAccountScreen = require('./CreateAccountScreen.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var App = React.createClass({
  render: function() {
    return (
      <div className="application_wrapper">

        <div className="application_routeHandler">
            <CreateAccountScreen/>
        </div>
        
      </div>
    );
  }
  
});
  
module.exports = App;