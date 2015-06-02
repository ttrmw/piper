var PipeableRow = React.createClass({
  render: function() {
    return (
      <tr className="pipeableRow">
        <td>{this.props.name}</td>
        <td>{this.props.state}</td>
      </tr>
    );
  }
});
