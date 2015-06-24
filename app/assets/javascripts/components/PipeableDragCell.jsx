var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;

var PipeableDragSource = {
  beginDrag: function(props) {
    return { row_id:  props.id };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var PipeableDragCell = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function() {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    return connectDragSource(
      <div className="pipeable drag-cell"
           style={{
             opacity: isDragging ? 0.5 : 1,
             cursor: 'move'
           }}>
        {this.props.name} {this.props.id}
      </div>

    );
  }
});

module.exports = DragSource("DRAGCELL", PipeableDragSource, collect)(PipeableDragCell);
