var React = require('react');
var PipeableForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    if (!name || !description) {
      return;
    }

    this.props.onPipeableSubmit( {name: name, description: description} );
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.description).value= '';
    return;
  },
  render: function() {
    return (
      <form className="PipeableForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="Description" ref="description"/>
        <input type="submit" value="post"/>
      </form>
    );
  }
});
