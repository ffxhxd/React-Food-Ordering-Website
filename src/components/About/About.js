import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ffxhxd");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} alt="heala" />
        <h1>
          Hello i am a class based component made by {name} from {location}{" "}
        </h1>
      </div>
    );
  }
}

export default About;
