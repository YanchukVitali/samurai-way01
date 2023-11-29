import React from "react";
import "./MyPost.css"
import {Post} from "../post/Post";

export const MyPost = () => {
    return (
        <div>
            <div className="post">My post</div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}