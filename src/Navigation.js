import { render } from "@testing-library/react";
import React from "react";
import './App.css';


function Navigation() {
    return (
    <div className="Nav">
        <ul>
        <li className="Nav-selected"><a href="/#">Home</a></li>
        <li><a href="/index.html">Tasks</a></li>
        <li><a href="/#">Projects</a></li>
        <li><a href="/timeline">Calendars</a></li>
        </ul>
    </div>
    )
}
export default Navigation; 