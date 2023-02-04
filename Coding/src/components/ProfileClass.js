import React from "react";
import HeaderComponent from "./Header";

class ProfileClass extends React.Component {
  //Creating State
  constructor(props) {
    super(props);
    console.log("Child - Constructor" + this.props.name);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Random Pahad",
      },
    };
    //All state variables are created as a part of one object
  }

  //Called after render
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/danishagarwal");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Child - DidMount" + this.props.name);
  }

  render() {
    console.log("Child - Render" + this.props.name);
    return (
      <div>
        <h1>Hello Profile Class Comp</h1>
        {/* Using props in Class */}
        <h2>Name: {this.state.userInfo.name}</h2>

        {/* Using State in class */}
        <h2>Bio: {this.state.userInfo.bio}</h2>

        {/* Using setState in classComp */}
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Button
        </button>
      </div>
    );
  }
}

export default ProfileClass;
