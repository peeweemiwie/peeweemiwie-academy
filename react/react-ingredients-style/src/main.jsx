var React       = require('react'),
    ReactDOM    = require('react-dom'),
    ListManager = require('./components/list/ListManager.jsx')
;

ReactDOM.render(<ListManager title='Ingredients' />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title='To Do' />, document.getElementById('todo'));
ReactDOM.render(<ListManager title='Shopping' />, document.getElementById('shopping'));
