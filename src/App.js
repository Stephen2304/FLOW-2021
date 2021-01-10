import './App.css';
import {TaskList} from './TaskList';
import Modal from 'react-modal';
import React from 'react';
import Timeline from './timeline';
import Navigation from "./Navigation";
import Menu from "./Menu";
import Header from "./Header"



function App() {

  return (

    <div className="Aside">
    <Navigation/>
    <Menu/>
    <Header/>
        <div className="cells">
        <TaskList/>
        </div>
</div>
  );
}


export default App;
