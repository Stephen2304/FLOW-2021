import './App.css';
import {TaskList, renderRoute} from './TaskList';
import Modal from 'react-modal';
import { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { IoMdContact } from 'react-icons/io'
import { RiGroupLine } from 'react-icons/ri'
import { BsBookmarkFill } from 'react-icons/bs'
import React, { Component, handleText, state } from 'react';


Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (

    <div className="Aside">
    <div className="Nav">
        <ul>
        <li className="Nav-selected"><a href="#">Home</a></li>
        <li><a href="index.html">Tasks</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="calendrier.html">Calendars</a></li>
        </ul>

    </div>

    <div className="Menu">

        <ul>
        <li className="selected"><a href=""> <IoMdContact/> My tasks</a></li>
        <li><a href=""> <BsBookmarkFill/> My Bookmarks</a></li>
        <hr/>
        <p/>
        <li><a href=""> <RiGroupLine/>  Team</a></li>
        
        </ul>
    </div>
    <div className="header">
        <p/>My tasks
          <button className="btn btn-primary" id="btn-tasks" onClick={() => setmodalIsOpen(true)}>Add Tasks</button>
          <hr/>
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setmodalIsOpen(false)}
        style={
          {
            overlay:  {
              background: 'rgba(0, 0, 0, 0.44'
            },
            content: {
              color: 'grey',
              width: '460px',
              height:'460px',
              right:'200px',
              left:'500px',
              top:'100px'
            },
          }
        }
        >
          <button className="btn btn-light" onClick={() => setmodalIsOpen(false)}
          
          style={
            {
              position: 'absolute',
              right: '10px'
            }
          }


          >X</button>
          
          <p/>
          <div className="formulaire">
          <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm"> Description </label>
            <div className="col-sm-10"><input type="email" className="form-control"  id="colFormLabel" placeholder="Description"/>
            </div>
          </div>
          <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Classement</label>
            <div className="col-sm-10"><input type="email" className="form-control" id="colFormLabel" placeholder="Classement"/>
            </div>
          </div>
          <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm ">Date début</label>
            <div className="col-sm-10"><input type="date" className="form-control" id="colFormLabel" placeholder="Classement"/>
            </div>
          </div>
          <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm ">Date fin</label>
            <div className="col-sm-10"><input type="date" className="form-control" id="colFormLabel" placeholder="Classement"/>
            </div>
          </div>
          <label className="mr-sm-2" for="inlineFormCustomSelect">Priorité</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">true</option>
            <option value="2">false</option>
          </select>
          </div>
          <p/>
          <br/>
          <br/>
          <button className="btn btn-primary" style={{position:'absolute', right:'10px'}}>Save</button>
        </Modal> 
    </div>
        <div className="cells">
        <TaskList/>
        </div>
</div>
  );
}


export default App;
