importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');


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
const messaging = fbInit.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: "https://cdn.pixabay.com/photo/2017/04/03/15/52/love-you-2198772__340.png",
        actions: [
            {
                title: "Like",
                action: "like",
                icon: "https://cdn.pixabay.com/photo/2017/04/03/15/52/love-you-2198772__340.png"
            }
        ],
    };
   // return ​ServiceWorkerRegistration.showNotification(notificationTitle, notificationOptions);
    // return self.registration.showNotification(notificationTitle,
    //     notificationOptions);
});
self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
  
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow('/');
    }));
  });

//curl --header "Authorization: key=AAAALGl07nM:APA91bHmGFIwwaPzMFZWLr0PbVAnxDrgDgvy3ezWAFpC6_gOo1grV5dLjRqaAWrq4tPSUD3VRDZ4evpAm4L0ei8nj8mU8T0CO7WJviAYsCw67GqtR_NOGYCz0bVdBjanYoKPGZvnMfo9" --header "Content-Type: application/json" -d '{ "to": "d0Cv7uYg1b0:APA91bE5XcAcKcatpjsjR-AnftaBXl8MQvjjzemhfK6g3TW2gXFnTnA0TBIdHGwqc0CYbhzFO9e8OZDcqJlozaklG6da65O_wYK0ESMLJ68Aac5JRYp9fgfzQtb1Kl6RCNoH5aUzZZy-", "notification": { "body": "ENTER YOUR MESSAGE HERE" } }' https://fcm.googleapis.com/fcm/send