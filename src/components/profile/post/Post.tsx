import React from "react";
import "./Post.css"


type PostType = {
    title: string
}

export const Post = (props: PostType) => {
    return (
        <div className="post">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYMzf_2M2DHKW2igKtQo3cc2IHcj7FzB-pg&usqp=CAU"
                alt="imeg profile"/>
            {props.title}
            <div className="like">
                <button>like</button>
            </div>
        </div>


    )
}