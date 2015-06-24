var PipeableRow = React.createClass({
  getInitialState() {
    return( { row_state: this.props.state } );
  },
  handleDrop: function(new_state) {
    $.ajax({
      url: 'pipeables/' + this.props.id,
      dataType: 'json',
      type: 'PATCH',
      data: { pipeable: { state: new_state } },
      success: function(data) {
        this.setState( { row_state: new_state } );
      }.bind(this)
    })
  },
  render: function() {
    var row_name = this.props.name;
    var row_id = this.props.id;
    var row_state = this.state.row_state;
    var handle_drop = this.handleDrop
    return (

      <tr id={row_name} className="pipeableRow">

        {this.props.states.map(
          function(state) {
            return(
              <PipeableDropCell state={state} row_state={row_state} row_id={row_id} row_name={row_name} dropHandler={handle_drop}/>

            );
          }
        )}

      </tr>
    );
  }
});

module.exports = PipeableRow;
