import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navigation/>

            <div className="app-wrapper-content">
                <Route path="/message" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
              {/*  <Dialogs/>
                <Profile/>*/}
            </div>

        </div>
        </BrowserRouter>
    );
}


export default App;
