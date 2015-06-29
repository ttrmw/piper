var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');
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
//    setInterval(this.loadPipeablesFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="pipeables">
        <PipeableForm onPipeableSubmit={this.handlePipeableSubmit} />
        <PipeablesTable data={this.state.data} states={this.state.states} />
      </div>
    );
  }
});


module.exports = DragDropContext(HTML5Backend)(Pipeables);
