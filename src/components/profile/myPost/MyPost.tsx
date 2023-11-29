import React from "react";
import "./MyPost.css"
import {Post} from "../post/Post";

export const MyPost = () => {
    return (
        // need refactor this component  because i dont like
        <div>
            <div className="post">My post <input type="text"/></div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}