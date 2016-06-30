var React = require('react'),
    List  = require('./List.jsx')
;

var ListManager = React.createClass({
  getInitialState: function(){
    return {items: [], newItemText: ''};
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
    var divStyle = {
      marginTop: 10,
    }

    return (
      <div style={divStyle} className='panel panel-primary'>
        <div className='panel-heading'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='panel-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='col-xs-8'>
              <input onChange={this.onChange} value={this.state.newItemText}
            className='form-control' />
            </div>
            <div className='col-xs-4'>
              <button className='btn btn-primary'>Add</button>
            </div>
          </form>
        </div>
        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;
