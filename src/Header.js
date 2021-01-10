import { render } from "@testing-library/react";
import React from "react";
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


function Header() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    return (
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
    )
}
export default Header; 