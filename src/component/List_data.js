import React from "react"

const List_data = (user_profiles, currentSelection) =>{
    return(
      console.log(user_profiles.user_profiles.data),
        Object.keys(user_profiles.user_profiles.data).map(([key], i) => (
            <div className="user_info">
              <div className="card_id">#{i + 1}</div>
              {(() => {
                console.log(user_profiles.currentSelection)
                if(user_profiles.currentSelection === "Posts"){
                  return(
                    <div>
                      userID : {user_profiles.user_profiles.data[key].userId}<br></br>
                      Title : {user_profiles.user_profiles.data[key].title}<br></br>
                      Body : {user_profiles.user_profiles.data[key].body}<br></br>
                    </div>

                  )
                }
                else if(user_profiles.currentSelection === "Comments"){
                  return(
                    <div>
                      postID : {user_profiles.user_profiles.data[key].postId}<br></br>
                      name : {user_profiles.user_profiles.data[key].name}<br></br>
                      Email : {user_profiles.user_profiles.data[key].email}<br></br>
                      Body : {user_profiles.user_profiles.data[key].body}<br></br>
                    </div>

                  )
                }
                else if(user_profiles.currentSelection === "Albums"){
                  return(
                    <div>
                      userID : {user_profiles.user_profiles.data[key].userId}<br></br>
                      title : {user_profiles.user_profiles.data[key].title}<br></br>
                    </div>
                    
                  )
                }
                else if(user_profiles.currentSelection === "Photos"){
                  return(
                    <div>
                      albumID : {user_profiles.user_profiles.data[key].albumId}<br></br>
                      Title : {user_profiles.user_profiles.data[key].title}<br></br>
                      Photo :  <img src={user_profiles.user_profiles.data[key].url}></img><br></br>
                    </div>
                    
                  )
                }
                else if(user_profiles.currentSelection === "Todos"){
                  return(
                    <div>
                      userID : {user_profiles.user_profiles.data[key].userId}<br></br>
                      Title : {user_profiles.user_profiles.data[key].title}<br></br>
                      Completed : {user_profiles.user_profiles.data[key].completed.toString()}<br></br>
                    </div>
                  )
                }
                else{
                  return(
                    <div>
                      Name : {user_profiles.user_profiles.data[key].name}<br></br>
                      Username : {user_profiles.user_profiles.data[key].username}<br></br>
                      Email : {user_profiles.user_profiles.data[key].email}<br></br>
                      Phone : {user_profiles.user_profiles.data[key].phone}<br></br>
                    </div>
                  )
                }
              })()}
              
            </div>
          ))
    )
}

export default List_data;