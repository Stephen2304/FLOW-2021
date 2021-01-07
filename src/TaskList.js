import React, {Component} from 'react';
import firebase from 'firebase';

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

    return (
        <p>{this.state.Taches.map((elt, i) => <div className='taches' key= {i} >  <div className="elt-1">{elt.description} {elt.projet} {elt.datebegin} {elt.dateend} {elt.priorité ? ' 🔵 ' : ' 🔴'}</div></div>)} </p>
        )
    }
}
