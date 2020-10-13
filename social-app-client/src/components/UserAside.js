import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { defaultFormatUtc } from "moment";

const UserAside = (props) => {
    return(
         <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
               {
                   props.userToVisit?
                   <img
                   src={props.userToVisit.profileImageUrl }
                   alt={props.userToVisit.username}
                   className="img-thumbnail"
               /> : <img
                   src={props.currentUser.user.profileImageUrl}
                   alt={props.currentUser.user.username}
                   className="img-thumbnail"
               />
               }
            </div>
        </div>
    </aside>
    )
   
}
export default UserAside;