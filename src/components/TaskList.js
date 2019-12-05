import React, { Component } from 'react';
import Title from './Title'
import IndividualAgenda from './IndividualAgenda'

class TaskList extends Component {

state = {
  listOfAllAgendas: []
}


componentDidMount(){
   fetch(`http://localhost:3000/users/${this.props.userID}`)
  .then(response => response.json())
  .then(response => {
    this.setState({
      listOfAllAgendas: response.agendas
    })
  })
}



// componentWillUpdateMount (){} ????
refetchAgendas = () => {
        fetch(`http://localhost:3000/users/${this.props.userID}`)
        .then(r => r.json())
        .then(response => {
            this.setState({
                agendas: response.agendas
            })
        })
    }






render(){
  const agendaList = this.state.listOfAllAgendas.map((agenda) => (
    <IndividualAgenda agenda={agenda} key={agenda.id} refetchAgendas={this.refetchAgendas}/>
  ))
  return (
    <div>
      <Title />
      <AgendaInput />
      {agendaList}
    </div>
  )
}



}
export default TaskList;
