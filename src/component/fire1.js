import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCbxMg59JxpVLVnHlcddOjZ8j_IuvReJuc",
    authDomain: "fir-c86b0.firebaseapp.com",
    databaseURL: "https://fir-c86b0.firebaseio.com",
    projectId: "fir-c86b0",
    storageBucket: "fir-c86b0.appspot.com",
    messagingSenderId: "159011263419"
  };
const fire1 = firebase.initializeApp(config);
export default fire1;