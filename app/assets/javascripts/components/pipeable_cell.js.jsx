var PipeableCell = React.createClass({
  render: function() {
    return(
      <div className="pipeable drag-cell">
        {this.props.name} {this.props.id}
      </div>

    );
  }
});
