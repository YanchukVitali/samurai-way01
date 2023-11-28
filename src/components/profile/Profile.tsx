import React from "react";
import "./Profile.css"
import {FirstPost} from "./post/FirstPost";
import {MyPost} from "./myPost/MyPost";

export const Profile = () => {
    return (
        <section className="section">
            <div>

                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700524800&semt=ais"
                     alt="Mountan"/>
            </div>
            <div> avatar</div>
            <FirstPost/>
            <MyPost/>
        </section>
        
        
    )
}