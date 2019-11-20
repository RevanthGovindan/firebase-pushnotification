import React from 'react';
import './App.css';
import msg from "./firebase";

function App() {
  let msgCount = 0;
  msg.requestPermission().then(() => {
    console.log("have permission")
    return msg.getToken();
  }).then((token) => {
    console.log(token)
  }).catch((err) => {
    console.log(err)
  });
  msg.onMessage((payload) => {
    console.log(payload)
    let data = payload.notification;
    new Notification(data.title, {
      body: data.body,
      icon: data.icon,
      image: data.image
    })
  });


  return (
    <div className="App">

    </div>
  );
}

export default App;
