import React, { Component } from 'react';
import IndividualTask from './IndividualTask'

class IndividualAgenda extends Component {

  render() {

    let tasksMade = 'YOU ARE SUPER UNPRODUCTIVE!'

    if(this.props.agenda.tasks){
      tasksMade = this.props.agenda.tasks.map((task) => (
        <IndividualTask task={task} />
      ))
    }

    return (
      <div>
        <h2>{this.props.agenda.title}</h2>
        {tasksMade}
      </div>
    );
  }

}

export default IndividualAgenda;
