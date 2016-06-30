var React       = require('react'),
    ReactDOM    = require('react-dom'),
    ListManager = require('./components/ListManager.jsx')
    ParaManager = require('./components/ParaManager.jsx')
;

ReactDOM.render(<ListManager title='Ingredients' />, document.getElementById('ingredients'));

ReactDOM.render(<ParaManager title='Letter' />,
document.getElementById('letter'));
