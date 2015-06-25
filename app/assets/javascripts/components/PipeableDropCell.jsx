var PropTypes = React.PropTypes;
var DropTarget = require('react-dnd').DropTarget;

var dropTarget = {
  drop: function(props, monitor, component) {
    component.props.dropHandler( props.state );
  },
  canDrop: function(props, monitor){
    return (monitor.getItem().row_id == props.row_id );
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
};

var PipeableDropCell = React.createClass({
  propTypes: {
    isOver: PropTypes.bool.isRequired
  },

  getInitialState() {
    return { row_state: this.props.state };
  },

  render: function() {
    var connectDropTarget = this.props.connectDropTarget;
    var state = this.state.row_state;
    var row_state = this.props.row_state;
    var row_id = this.props.row_id;
    var row_name = this.props.row_name;

    return connectDropTarget(
      <td className="pipeable drop-cell">
        {state == row_state ?
          <PipeableDragCell className="pipeable drag-cell" id={row_id} name={row_name}/>
        : '' }
     </td>
    )
  }
});

module.exports = DropTarget('DRAGCELL', dropTarget, collect)(PipeableDropCell);
