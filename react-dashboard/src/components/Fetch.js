import React from "react";
import ReactDOM from "react-dom";

const Post = ({ body }) => {
  return (
    <div className="contentWrapper">
      {body.map((post) => {
        const { id, level, capacity } = post;
        return (
          <div key={id}>
            <h2>{level}</h2>
            <p>{capacity}</p>
          </div>
        );
      })}
    </div>
  );
};

class Fetchmydata extends React.Component {
  state = {
    isLoading: true,
    posts: [],
    error: null,
  };
  fetchPosts() {
    fetch(`https://foobar-exam.herokuapp.com/`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          posts: data,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { isLoading, posts, error } = this.state;

    return (
      <React.Fragment>
        {console.log(posts)}

        {!isLoading ? Object.keys(posts).map((key) => <Post key={key} body={posts[key]} />) : <h3>Loading...</h3>}
      </React.Fragment>
    );
  }
}

export default Fetchmydata;
