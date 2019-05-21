import firebase from 'firebase';



const firebaseConfig  = {
    apiKey: "AIzaSyA6EX_Y2l7MxOaJmAfPx5HUAYUIpX6WtpE",
    authDomain: "ely-burguer-queen.firebaseapp.com",
    databaseURL: "https://ely-burguer-queen.firebaseio.com",
    projectId: "ely-burguer-queen",
    storageBucket: "ely-burguer-queen.appspot.com",
    messagingSenderId: "324480551011",
    appId: "1:324480551011:web:4aebb526702756f0"
  };


const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;