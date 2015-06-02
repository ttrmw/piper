var PipeableForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    if (!name || !author) {
      return;
    }

    this.props.onPipeableSubmit( {name: name, description: description} );
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value= '';
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
