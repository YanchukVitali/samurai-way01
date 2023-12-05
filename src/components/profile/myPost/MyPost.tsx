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
            <Post title="First post" like={15}/>
            <Post title="Second post" like={1}/>
            <Post title="Post number 3" like={8}/>
            <Post title="Post number 4" like={10}/>
        </div>

    )
}