importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


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

//curl --header "Authorization: key=AAAALGl07nM:APA91bHmGFIwwaPzMFZWLr0PbVAnxDrgDgvy3ezWAFpC6_gOo1grV5dLjRqaAWrq4tPSUD3VRDZ4evpAm4L0ei8nj8mU8T0CO7WJviAYsCw67GqtR_NOGYCz0bVdBjanYoKPGZvnMfo9" --header "Content-Type: application/json" -d '{ "to": "d0Cv7uYg1b0:APA91bE5XcAcKcatpjsjR-AnftaBXl8MQvjjzemhfK6g3TW2gXFnTnA0TBIdHGwqc0CYbhzFO9e8OZDcqJlozaklG6da65O_wYK0ESMLJ68Aac5JRYp9fgfzQtb1Kl6RCNoH5aUzZZy-", "notification": { "body": "ENTER YOUR MESSAGE HERE" } }' https://fcm.googleapis.com/fcm/send