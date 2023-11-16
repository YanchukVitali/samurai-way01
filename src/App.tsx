import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Navigation} from "./navigation/Navigation";
import {Section} from "./section/Section";


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header></Header>
            <Navigation/>
            <Section/>
        </div>

    );
}


export default App;
