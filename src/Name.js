import React from 'react';
import './Name.css';
import {Form} from 'react-bootstrap';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.name);
    event.preventDefault();
  }

  render(){
  return (
    <div class="inputname">
        <h1>Please Enter Your Name</h1>
        <Form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" name={this.state.name} onChange={this.handleName} required pattern="^[a-zA-Z][a-zA-Z\s]*$"/>
        <button type = "submit">Submit</button>
        </Form>
    </div>
  );
  }
}

export default Name;
