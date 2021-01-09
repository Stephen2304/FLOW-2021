import React, {Component} from 'react';
import firebase from 'firebase';
import { ImCheckboxUnchecked } from "react-icons/im";

require('firebase/auth');
require('firebase/database');


// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyDZblqJDN1qDnfuodE3ttUlzx9tpLnRahM",
    authDomain: "flow2021-899f1.firebaseapp.com",
    databaseUrl: "https://flow2021-899f1-default-rtdb.firebaseio.com/",
    projectId: "flow2021-899f1",
    storageBucket: "flow2021-899f1.appspot.com",
    messagingSenderId: "1007288699495",
    appId: "1:1007288699495:web:9d6d2228e4662fb7fce2c2",
    measurementId: "G-2CM6L6FXH8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export class TaskList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        var db = firebase.database().ref('Taches').orderByKey(); 
    
    db.on('value', snapshot  => {
        this.setState({
            Taches: snapshot.val(),
            loading: false
        })
    })
}

render() {


    if(this.state.loading){
        return <h1>Chargement...</h1>
    }

    const priorityHight = this.state.Taches.filter(elt => elt.priorité=== false);
    const priorityLow = this.state.Taches.filter(elt => elt.priorité=== true);
    return (
        <div>
        <p>{this.state.Taches.map((elt, i) => <div className='taches' key= {i} >  <div className="elt-1"><input type="checkbox" className="check"/><span className="line-1"> {elt.description}</span> <span className="line-2">{elt.projet}</span> <span className="line-3">{elt.datebegin}</span> <span className="line-4">{elt.dateend}</span> <span className="line-5">{elt.priorité ? ' 🔵 ' : ' 🔴'}</span></div></div>)} </p>
        <hr/>
        <p>Priorité Haute {priorityHight.map((elt, i) => <div className='taches' key= {i} >  <div className="elt-1"><input type="checkbox"/>  <span className="line-1"> {elt.description}</span> <span className="line-2">{elt.projet}</span> <span className="line-3">{elt.datebegin}</span> <span className="line-4">{elt.dateend}</span> <span className="line-5">{elt.priorité ? ' 🔵 ' : ' 🔴'}</span></div></div>)}</p>
        <hr/>

        <p>Priorité Basse {priorityLow.map((elt, i) => <div className='taches' key= {i} >  <div className="elt-1"><input type="checkbox"/>  <span className="line-1"> {elt.description}</span> <span className="line-2">{elt.projet}</span> <span className="line-3">{elt.datebegin}</span> <span className="line-4">{elt.dateend}</span> <span className="line-5">{elt.priorité ? ' 🔵 ' : ' 🔴'}</span></div></div>)}</p>
        </div>
        )
    }
}
