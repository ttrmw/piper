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

  loadPipeableStatesFromServer: function() {
    $.ajax({
      url: this.props.states_url,
      dataType: 'json',
      cache: false,
      success: function(data) {
       this.setState( { states: data } );
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
    return { states: [], data: [], currentDragItem: null };
  },

  componentDidMount: function() {
    this.loadPipeablesFromServer();
    this.loadPipeableStatesFromServer();
    setInterval(this.loadPipeablesFromServer, this.props.pollInterval);
  },

  onDragStart: function(drag_item) {
    this.setState( { currentDragItem: drag_item } );
  },

  onDragStop: function() {
    this.setState( { currentDragItem: null } );
  },

  onDrop: function(target) {
    this.setState(
      {
        lastDrop: {
          source: this.state.currentDragItem,
          target: target
        }
      }
    );
  },

  dropDescription: function() {
    if (drop == this.state.lastDrop) {
      return (
        <p className="drop-description">
          {'Dropped source ' + drop.source.type + '-' + drop.source.index + ' on target ' + drop.target.index}
        </p>
      );
    }
  },

  render: function() {
    return (
      <div class="pipeables">
        <PipeablesTable data={this.state.data} states={this.state.states} />
        <PipeableForm onPipeableSubmit={this.handlePipeableSubmit} />
      </div>
    );
  }
});
