import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  togglemode = () => {
    console.log("Dark Mode toggled");
    this.setState(
      (prevState) => ({ darkMode: !prevState.darkMode }),
      () => {
        document.body.style.backgroundColor = this.state.darkMode
          ? "#333"
          : "#fff";
        document.body.style.color = this.state.darkMode ? "#fff" : "#000";
      }
    );
  };
  pageSize = 5;

  state ={
    process : 0 
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        {/* <Router> */}
          <Navbar togglemode={this.togglemode} />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <News setProgress =  {this.setProgress}  pageSize={this.pageSize} />
          {/* <Routes>
            <Route
              exact
              path="/business"
              element={<News setProgress =  {this.setProgress}  pageSize={this.pageSize} category="business" />}
            />
            <Route
              exact
              path="/entertain"
              element={
                <News setProgress =  {this.setProgress}  pageSize={this.pageSize} category="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News setProgress =  {this.setProgress}  pageSize={this.pageSize} category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress =  {this.setProgress}  pageSize={this.pageSize} category="health" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress =  {this.setProgress}  pageSize={this.pageSize} category="sports" />}
            />
          </Routes>
        </Router> */}
      </div>
    );
  }
}
