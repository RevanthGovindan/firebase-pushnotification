import * as firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCyDWPhYQ2p3jL8hkfmPK2ifpF_dy5-dyA",
    authDomain: "pushnotification-1b87a.firebaseapp.com",
    databaseURL: "https://pushnotification-1b87a.firebaseio.com",
    projectId: "pushnotification-1b87a",
    storageBucket: "pushnotification-1b87a.appspot.com",
    messagingSenderId: "955641023795",
    appId: "1:955641023795:web:26dd3102a589be68b54246"
};
const fbInit = firebase.initializeApp(firebaseConfig);
const msg = fbInit.messaging();

msg.usePublicVapidKey("BPkA9rKfkjgR6KB5KTMYtobIH4HBuHMwUAVzhqNLW4jr9YovEBF6I5nJiH9joNvrLAG0pbqDqhvDX1x0CjQkNI4");

export default msg;


