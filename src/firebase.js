import * as firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBI0uDFlQYtbHhueOhqcxkNRYAp0BowZtQ",
    authDomain: "chat-adaad.firebaseapp.com",
    databaseURL: "https://chat-adaad.firebaseio.com",
    projectId: "chat-adaad",
    storageBucket: "chat-adaad.appspot.com",
    messagingSenderId: "190747831923",
    appId: "1:190747831923:web:7c20350dea0400e5"
};
const fbInit = firebase.initializeApp(firebaseConfig);
const msg = fbInit.messaging();

msg.usePublicVapidKey("BNz1zNhGxIDIY2t9i_Y8xQS8qtEdhYxliEIQop-iA7l4Wzk0WTh4Y9OI9-kHxp4I6B78gn39xpdvgB4QU9sI78U");


export default msg;


