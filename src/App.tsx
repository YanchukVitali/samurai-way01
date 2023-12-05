import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            {/*<Profile/>*/}
            <div className={"app-wrapper-content"}>
                <Dialogs/>
            </div>

        </div>

    );
}


export default App;
