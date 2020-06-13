import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodoFunc(this.state);
      this.setState({
          content:""
      })

  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
    
  };

  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.handleSubmit}>
          <label> Enter New To-do here</label>
          <input type="text" value={this.state.content} onChange={this.handleChange}></input>
          <button className="btn waves-effect waves-light" >Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo