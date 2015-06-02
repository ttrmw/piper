var PipeablesTable = React.createClass({
  render: function() {
    var pipeableNodes = this.props.data.map(function (pipeable) {
      return (
        <PipeableRow name={pipeable.name} state={pipeable.state}></PipeableRow>
      )
    });
    return (
      <div>
        <h2>Pipeables</h2>
        <table className="pipeables">
          {pipeableNodes}
        </table>
      </div>
    );
  }
});

