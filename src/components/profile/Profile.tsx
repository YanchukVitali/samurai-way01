import React from "react";
import "./Profile.css"
import {MyPost} from "./myPost/MyPost";
import {AvatarProfile} from "./avatar/AvatarProfile";
import {ProfilePicture} from "./profilePicture/ProfilePicture";

export const Profile = () => {
    return (
        <section className="section">
            <ProfilePicture/>
            <AvatarProfile/>
            <MyPost/>


        </section>
        
        
    )
}

