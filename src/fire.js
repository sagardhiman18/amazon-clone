import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtHePqVUU3POB5patLH7kyVvajDVuD0UI",
    authDomain: "clone-f0398.firebaseapp.com",
    databaseURL: "https://clone-f0398.firebaseio.com",
    projectId: "clone-f0398",
    storageBucket: "clone-f0398.appspot.com",
    messagingSenderId: "53580339786",
    appId: "1:53580339786:web:31c77aacacd2b15c1564b3",
    measurementId: "G-B8XT5M9NLE"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;