import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
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

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, taps } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.state.taps.map((tap) => (
            <li key={tap.id}>
              {tap.level} {tap.capacity}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent;
