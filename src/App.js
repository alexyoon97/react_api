import React from "react";
import "./App.css";
import axios from "axios";
import "./User_info.css"

class App extends React.Component {
  state = {
    isFetching: true,
    user_profiles: [],
    key_value : [ "id", "name", "username", "email", "address"]
  };

    async fetch_Data(url){
      const user_profiles = await axios.get(url);
      this.setState({user_profiles, isFetching: false });
    }
    render() {
      const {user_profiles, isFetching, key_value } = this.state;
      return (
        <div className="container">
          <button>Post</button>
          <button>Comments</button>
          <button>Albums</button>
          <button>Photos</button>
          <button onClick={() => this.fetch_Data("https://jsonplaceholder.typicode.com/todos")}>To do</button>
          <button onClick={() => this.fetch_Data("https://jsonplaceholder.typicode.com/users")}>Users</button>

        <div className="user_data">
          {
            isFetching ? (
              <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>
            ) : (
              console.log(user_profiles),
              Object.keys(user_profiles.data).map(([key, i])=>(
                <div className="user_info">
                      <div>{key} : {user_profiles.data[key].name}</div>
                      <div>{key} : {user_profiles.data[key].username}</div>
                      <div>{key} : {user_profiles.data[key].email}</div>

                    </div>
                  // Object.keys(user_profiles.data[key]).map((cate, i) => (
                  //   <div className="user_info">
                  //     <div>{cate} : {user_profiles.data[key].username}</div>
                  //   </div>
                  // ))
              ))
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
