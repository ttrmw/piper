var React = require('react');
var PipeableRow = React.createClass({
  render: function() {
    var row_name = this.props.name;
    var row_id = this.props.id;
    var row_state = this.props.state;
    return (

      <tr id={row_name} className="pipeableRow">

        {this.props.states.map(
          function(state) {
            return(
              <PipeableDropCell state={state} row_state={row_state} row_id={row_id} row_name={row_name}/>
            );
          }
        )}

      </tr>
    );
  }
});
