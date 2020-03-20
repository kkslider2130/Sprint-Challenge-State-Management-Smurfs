import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSmurf,
  postSmurf,
  deleteSmurf,
  removeSmurf
} from "../actions/index";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  fetchSmurf = e => {
    e.preventDefault();
    this.props.getSmurf();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postSmurf = (e, obj) => {
    e.preventDefault();
    this.props.postSmurf(obj);
    this.setState({ name: "", age: "", height: "" });
  };
  voidSmurf = (e, obj, id) => {
    e.preventDefault();
    this.props.removeSmurf(id);
    this.props.deleteSmurf(obj);
  };
  render() {
    console.log(this.props.smurfs);
    console.log(this.state);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Create your own smurf!</div>
        <div>Simply give your smurf a name, age and height!</div>
        <div>Have fun!</div>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.age}
          name="age"
          placeholder="age"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.height}
          name="height"
          placeholder="height"
          onChange={this.handleChange}
        />

        <button onClick={e => this.fetchSmurf(e)}>show smurfs!</button>
        <button onClick={e => this.postSmurf(e, this.state)}>post smurf</button>
        <div className="smurf-con">
          {this.props.smurfs.map(a => {
            return (
              <div className="smurfs">
                <p>name: {a.name}</p>
                <p>age: {a.age}</p>
                <p>height: {a.height + "cm"}</p>
                <button
                  onClick={e => {
                    console.log(a.id);
                    this.voidSmurf(e, a, a.id);
                  }}
                >
                  {" "}
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});
export default connect(mapStateToProps, {
  getSmurf,
  postSmurf,
  deleteSmurf,
  removeSmurf
})(App);
