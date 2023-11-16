import React from "react";


type TehnologyType = {
    title: string[]
}
export const Technology = (props:TehnologyType) => {
    return (
        <div>
            <ul>
                <li>{props.title}</li>
                <li>{props.title}</li>
                <li>{props.title}</li>
                <li>{props.title}</li>
            </ul>
        </div>
    );
}

