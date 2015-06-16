var PipeableDropCell = React.createClass({
  render: function() {
    var state = this.props.state;
    var row_state = this.props.row_state;
    var row_id = this.props.row_id;
    var row_name = this.props.row_name;

    return (
      <td className="pipeable drop-cell" ref={state} onClick={this.handleDropCellClick.bind(this, row_id, state, row_state)}>
        {state == row_state ?
          <PipeableCell className="pipeable drag-cell" id={row_id} name={row_name}/>
        : '' }
     </td>
    )
  },
  handleDropCellClick: function(row_id, drop_cell_state, drag_cell_state) {
    $.ajax({
      url: 'pipeables/' + row_id,
      dataType: 'json',
      type: 'PATCH',
      data: { pipeable: { state: drop_cell_state } },
      success: function(data) {
        this.setState( { data: data } );
      }.bind(this)
    });
  }
});
