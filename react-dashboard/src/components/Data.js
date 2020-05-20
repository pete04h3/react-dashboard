import React from "react";
import Circle from "react-circle";
export default class Myapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      taps: [],
    };
  }

  componentDidMount() {
    console.log(this.state);
    fetch("https://foobar-exam.herokuapp.com/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.taps,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    let items = this.state.taps;
    let cap = this.state.taps.capacity;
    let lvl = this.state.taps.level;
    let percentage = (lvl / cap) * 100;

    return (
      <div>
        {this.state.taps.map((tap) => {
          return <Circle progress={percentage} />;
        })}
      </div>
    );
  }
}
