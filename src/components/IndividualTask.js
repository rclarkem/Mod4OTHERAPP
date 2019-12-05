import React, { Component } from 'react';

class IndividualTask extends Component {

  render() {
    return (
      <div>
        {this.props.task.content}
        <button>x</button>
      </div>
    );
  }

}

export default IndividualTask;
