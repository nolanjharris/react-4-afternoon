import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(response => {
      console.log(response.data)
      this.setState({ studentInfo: response.data });
    }).catch(error => console.log(error));
  }

  render() {
    const { first_name, last_name, grade, email } = this.state.studentInfo;
    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}><a>Back</a></Link>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
      </div>
    )
  }
}