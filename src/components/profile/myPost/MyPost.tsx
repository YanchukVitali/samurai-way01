import React from "react";
import "./MyPost.css"
import {Post} from "../post/Post";

export const MyPost = () => {
    return (
        // need refactor this component  because i dont like
        <div>
            <div className="post">My post <input type="text"/></div>
            <Post title="First post"/>
            <Post title="Second post"/>
            <Post title="Post number 3"/>
            <Post title="Post number 4"/>
        </div>

    )
}