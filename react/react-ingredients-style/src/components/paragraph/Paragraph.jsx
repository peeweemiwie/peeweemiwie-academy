var React = require('react');
var ParaList = require('./ParaList.jsx');

var Paragraph = React.createClass({
  render: function(){
    var createItem = function(text, index){
      return <ParaList text={text} index={index} />;
    }
    return (<div>{this.props.items.map(createItem)}</div>)
  }
});

module.exports = Paragraph;
