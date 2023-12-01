import React from "react";
import m from "./MyPost.module.css"
import {Post} from "../post/Post";

export const MyPost = () => {
    return (
        // need refactor this component  because i dont like
        <div>
            <div className={m.post}>
                My post
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post title="First post"/>
            <Post title="Second post"/>
            <Post title="Post number 3"/>
            <Post title="Post number 4"/>
        </div>

    )
}