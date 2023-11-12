import React from "react";


type HeaderType = {
    title: Array<string>
}
export  const Header = (props: HeaderType) => {
    return (
        <div>
            <a href="#s">{props.title[0]}</a>-
            <a href="#s">{props.title[1]}</a>-
            <a href="#s">{props.title[2]}</a>
        </div>
    );
}

