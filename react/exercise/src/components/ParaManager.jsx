var React = require('react'),
    Paragraph  = require('./Paragraph.jsx')
;

var ParaManager = React.createClass({
  getInitialState: function(){
    return {items: ['Miwa', 'Yagi']};
  },
  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText: ''});
  },
  render: function(){
    return (
      <div>
        <h3>{this.props.title}</h3>

        <Paragraph items={this.state.items} />
      </div>
    );
  }
});

module.exports = ParaManager;
