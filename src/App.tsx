import React from 'react';
import './App.css';
import {Technology} from "./Technology";
import {Header} from "./Header";
import Footer from "./Footer";


const App = () => {
    return (
        <div>
            <Header title={["Hello", "News Feed", "Messages"]}/>
            <Technology title={["css", "html", "js", "react"]}/>
            <Footer/>
        </div>

    );
}


export default App;
