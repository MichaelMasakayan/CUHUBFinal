import "./styles.css";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: 1,
      headerTitles: ["Header"],
      picLink: "./images/defaulticon.png",
      button1: "Button1",
      button2: "Button2"
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      headers: props.headers,
      headerTitles: props.headerTitles,
      picLink: props.picLink,
      button1: props.button1,
      button2: props.button2
    };
  }

  render() {
    return (
      <div>
        <img
          src={this.state.picLink}
          alt="Profile"
          class="rounded float-start"
        ></img>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">
            {this.state.button1}
          </button>
          <button class="btn btn-primary" type="button">
            {this.state.button2}
          </button>
        </div>
      </div>
    );
  }
}
