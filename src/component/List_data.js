import React from "react";
import Filter from "../component/filter_comp";

const List_data = (imported_data) => {
  return (
    <div className="user_data">
      {/* <Filter selected={imported_data.currentSelection}/><br></br> */}
      {Object.keys(imported_data.user_profiles.data).map(([key], i) => (
        <div className="user_info">
          <div className="card_id">#{i + 1}</div>
          {(() => {
            console.log(imported_data.currentSelection);
            if (imported_data.currentSelection === "Posts") {
              return (
                <div>
                  <div>
                    userID : {imported_data.user_profiles.data[key].userId}
                    <br></br>
                    Title : {imported_data.user_profiles.data[key].title}
                    <br></br>
                    Body : {imported_data.user_profiles.data[key].body}
                    <br></br>
                  </div>
                </div>
              );
            } else if (imported_data.currentSelection === "Comments") {
              return (
                <div>
                  postID : {imported_data.user_profiles.data[key].postId}
                  <br></br>
                  name : {imported_data.user_profiles.data[key].name}
                  <br></br>
                  Email : {imported_data.user_profiles.data[key].email}
                  <br></br>
                  Body : {imported_data.user_profiles.data[key].body}
                  <br></br>
                </div>
              );
            } else if (imported_data.currentSelection === "Albums") {
              return (
                <div>
                  userID : {imported_data.user_profiles.data[key].userId}
                  <br></br>
                  title : {imported_data.user_profiles.data[key].title}
                  <br></br>
                </div>
              );
            } else if (imported_data.currentSelection === "Photos") {
              return (
                <div>
                  albumID : {imported_data.user_profiles.data[key].albumId}
                  <br></br>
                  Title : {imported_data.user_profiles.data[key].title}
                  <br></br>
                  Photo :{" "}
                  <img src={imported_data.user_profiles.data[key].url}></img>
                  <br></br>
                </div>
              );
            } else if (imported_data.currentSelection === "Todos") {
              return (
                <div>
                  userID : {imported_data.user_profiles.data[key].userId}
                  <br></br>
                  Title : {imported_data.user_profiles.data[key].title}
                  <br></br>
                  Completed :{" "}
                  {String(imported_data.user_profiles.data[key].completed)}
                  <br></br>
                </div>
              );
            } else {
              return (
                <div>
                  Name : {imported_data.user_profiles.data[key].name}
                  <br></br>
                  Username : {imported_data.user_profiles.data[key].username}
                  <br></br>
                  Email : {imported_data.user_profiles.data[key].email}
                  <br></br>
                  Phone : {imported_data.user_profiles.data[key].phone}
                  <br></br>
                </div>
              );
            }
          })()}
        </div>
      ))}
    </div>
  );
};

export default List_data;
