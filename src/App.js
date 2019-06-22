import React from 'react';
import './App.css';
import msg from "./firebase";

function App() {
  msg.requestPermission().then(() => {
    console.log("have permission")
    return msg.getToken();
  }).then((token) => {
    console.log(token)
  }).
    catch((err) => {
      console.log("err")
    });
  msg.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });


  return (
    <div className="App">

    </div>
  );
}

export default App;
