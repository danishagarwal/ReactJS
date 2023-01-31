import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent- Did Mount");
  }

  render() {
    console.log("Parent- Render");
    return (
      <div className="About">
        <h1>Hi, Dan here!</h1>
        <ProfileClass name={"First Name"} />
      </div>
    );
  }
}

export default About;
