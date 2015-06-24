var React = require('react');
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
        <h2>Pipeables</h2>
        <table className="pipeables" states={states}>
          <tr>
            {states.map(
              function(state) {
                return(
                  <td><h3>{state}</h3></td>
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

