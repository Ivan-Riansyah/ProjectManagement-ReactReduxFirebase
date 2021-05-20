import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAHcDozVMLgFrysKUfbKJ_-BwLgsD1NlX8",
    authDomain: "react-redux-tuts-ce0d6.firebaseapp.com",
    projectId: "react-redux-tuts-ce0d6",
    storageBucket: "react-redux-tuts-ce0d6.appspot.com",
    messagingSenderId: "1062876394421",
    appId: "1:1062876394421:web:feb2918ead4d3d39e75ffc",
    measurementId: "G-YVHQ8V42EH"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;