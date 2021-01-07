import './App.css';
import {TaskList} from './TaskList';
import Modal from 'react-modal';
import { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";





Modal.setAppElement('#root');



function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="Aside">
    <div className="Nav">
        <ul>
        <li className="Nav-selected"><a href="">Home</a></li>
        <li><a href="">Tasks</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Calendars</a></li>
        </ul>

    </div>

    <div className="Menu">
    <div>
        
    </div>
        <ul>
        <li className="selected"><a href="">My tasks</a></li>
        <li><a href="">My Bookmarks</a></li>

        <li><a href="">Team</a></li>
        </ul>
    </div>
    <div className="header">
        <h1>My tasks</h1>
          <button className="btn btn-primary" id="btn-tasks" onClick={() => setmodalIsOpen(true)}>Add Tasks</button>
            <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setmodalIsOpen(false)}
            style={
              {
                overlay:  {
                  background: 'rgba(0, 0, 0, 0.44'
                },
                content: {
                  color: 'grey',
                  width: '450px',
                  height:'450px',
                  right:'200px',
                  left:'500px',
                  top:'100px'
                }
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
              <input type="checkbox" disabled/> <input type="text" placeholder="Add title"/>
              <hr/>
              <input type="text" placeholder="Add notes"/><hr/>
              
            </Modal> 
    </div>
        <div className="cells">
          <TaskList/>
        </div>
</div>
  );
}

export default App;
