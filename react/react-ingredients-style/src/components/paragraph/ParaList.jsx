var React = require('react');

var ParaList = React.createClass({
  render: function(){
    return (
      <p>{this.props.index} : {this.props.text}</p>
    )
  }
});

module.exports = ParaList;
