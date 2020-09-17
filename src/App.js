import React from "react";
import "./App.css";
import axios from "axios";
import "./User_info.css";
import List_data from "./component/List_data.js"

class App extends React.Component {
  state = {
    isFetching: true,
    user_profiles: [],
    currentSelection : ""
  };

  changeSelection = (target) => {
    this.setState((prevState) => {
      return { currentSelection : target}
    })
  }

  async fetch_Data(url, target) {
    const user_profiles = await axios.get(url);
    this.changeSelection(target)
    this.setState({ user_profiles, isFetching: false });
  }
  render() {
    const { user_profiles, isFetching, currentSelection } = this.state;
    return (
      <div className="container">
        <div className="api_call_buttons">
          <button
            onClick={
              () => this.fetch_Data("https://jsonplaceholder.typicode.com/posts", "Posts")
            }
          >
            Post
          </button>
          <button
            onClick={() =>
              this.fetch_Data("https://jsonplaceholder.typicode.com/comments", "Comments")
            }
          >
            Comments
          </button>
          <button
            onClick={() =>
              this.fetch_Data("https://jsonplaceholder.typicode.com/albums", "Albums")
            }
          >
            Albums
          </button>
          <button
            onClick={() =>
              this.fetch_Data("https://jsonplaceholder.typicode.com/photos", "Photos")
            }
          >
            Photos
          </button>
          <button
            onClick={() =>
              this.fetch_Data("https://jsonplaceholder.typicode.com/todos", "Todos")
            }
          >
            To do
          </button>
          <button
            onClick={() =>
              this.fetch_Data("https://jsonplaceholder.typicode.com/users", "Users")
            }
          >
            Users
          </button>
        </div>

        <div className="user_data">
          {isFetching ? (
            <div className="loader">
              <span className="loader__text">Please Choose one</span>
            </div>
          ) : (
            <List_data user_profiles={user_profiles} currentSelection={currentSelection}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
