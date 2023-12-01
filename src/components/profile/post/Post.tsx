import React from "react";
import p from "./Post.module.css"


type PostType = {
    title: string
}

export const Post = (props: PostType) => {
    return (
        <div className={p.post}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYMzf_2M2DHKW2igKtQo3cc2IHcj7FzB-pg&usqp=CAU"
                alt="imeg profile"/>
            {props.title}
            <div className={p.like}>
                <button>like</button>
            </div>
        </div>


    )
}