import React from "react";
import "./Profile.css"
import {FirstPost} from "./post/FirstPost";
import {MyPost} from "./myPost/MyPost";

export const Profile = () => {
    return (
        <section className="section">
            <Profile/>
            <div> avatar</div>
            <FirstPost/>
            <MyPost/>
        </section>
        
        
    )
}