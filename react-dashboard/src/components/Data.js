import React from "react";
import Circle from "react-circle";
export default class Myapp extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentDidMount() {
    fetch("https://foobar-exam.herokuapp.com/")
      .then((response) => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  render() {
    let items = this.state.items;
    let cap = this.state.items.capacity;
    let lvl = this.state.items.level;
    let percentage = (lvl / cap) * 100;
    console.log(items, cap, lvl, percentage);
    return (
      <div>
        {items.taps.map((tap) => {
          return <Circle progress={percentage} />;
        })}
      </div>
    );
  }
}
