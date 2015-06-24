var PipeablesTable = React.createClass({
  render: function() {
    var states = this.props.states;
    var pipeableRows = this.props.data.map(
      function (pipeable) {
        return (
          <PipeableRow id={pipeable.id} name={pipeable.name} state={pipeable.state} states={states}/>
        );
      }
    );

    return (
      <div>
        <table className="pipeables" states={states}>
          <tr>
            {states.map(
              function(state) {
                return(
                  <td className="header"><h3>{state}</h3></td>
                )
              }
            )}
          </tr>
          {pipeableRows}
        </table>
      </div>
    );
  }
});

module.exports = PipeablesTable;

