var Pipeables = React.createClass({

  loadPipeablesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState( { data: data } );
      }.bind(this),
      error: function(xhr, status, err) {
        console.error( this.props.url, status, err.toString() );
      }.bind(this)
    })
  },

  handlePipeableSubmit: function(pipeable) {
    $.ajax({
    url: this.props.url,
    dataType: 'json',
    type: 'POST',
    data: { pipeable: pipeable },
    success: function(data) {
      this.setState( { data: data } );
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
    });
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadPipeablesFromServer();
    setInterval(this.loadPipeablesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div class="pipeables">
        <PipeablesTable data={this.state.data} />
        <PipeableForm onPipeableSubmit={this.handlePipeableSubmit} />
      </div>
    );
  }
});
