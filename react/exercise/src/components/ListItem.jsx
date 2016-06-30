var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return (
      <li>{this.props.text}</li>
    );
  }
});

module.exports = ListItem;
