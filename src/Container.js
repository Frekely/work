import React from "react";
import './Container.css';
import Logo from './aloevera.jpg'


const Container = () => {
    return (
        <div className="container mt3">
            <div className="row">
                <div className="col-md-6 f3 ml0">
                    <h1 className="header f1">Design a better website template.</h1>
                    <p>Far away behind the words mountains, far from the countries vocalia and consonantia, there live the blind text</p>
                    <button className="button bg-primary pa2">Free download</button>
                </div>
                <div className="col-md-6 f1 mt6">
                    <img className="img " src={Logo}></img>
                </div>
            </div>
        </div>
    );
};

export default Container
