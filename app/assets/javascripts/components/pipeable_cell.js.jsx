var PipeableCell = React.createClass({
  handleSubmit: function(e, pipeable) {
    var state = React.findDOMNode(this.refs.state).value.trim();
    e.preventDefault();
    $.ajax({
      url: 'pipeables/' + this.props.id,
      dataType: 'json',
      type: 'PATCH',
      data: { pipeable: { state: state } },
      success: function(data) {
        this.setState( { data: data } );
      }.bind(this),
      error: function(xhr, status, err ) {
        console.error('pipeables.json', status, err.toString());
      }.bind(this)
    })
  },

  render: function() {
    return(
      <div className="pipeable">
        {this.props.name} {this.props.id}
        <form className="PipeableForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.state} ref="state"/>
          <input type="submit" value="patch"/>
        </form>
      </div>

    );
  }
});
