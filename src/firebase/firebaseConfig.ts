
// firebase.js or firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  // apiKey: "AIzaSyCq2Kb4YOXfLg5SOQtkdyA7-0t-xVmngo4",
  // authDomain: "smart-waterbottle-c4d99.firebaseapp.com",
  // databaseURL: "https://smart-waterbottle-c4d99-default-rtdb.firebaseio.com",
  // projectId: "smart-waterbottle-c4d99",
  // storageBucket: "smart-waterbottle-c4d99.appspot.com",
  // messagingSenderId: "91774345393",
  // appId: "1:91774345393:web:3a70c341e5a4836b1c0290",
  // measurementId: "G-QFG5RZZKJD"
  // apiKey: "AIzaSyDoM4WpXo0lv3ZTmdANVARoipzjoXjmqQk",
  // authDomain: "martbottl.firebaseapp.com",
  // projectId: "martbottl",
  // storageBucket: "martbottl.appspot.com",
  // messagingSenderId: "218842294417",
  // appId: "1:218842294417:web:ba8922f6329bfa356cf730",
  // measurementId: "G-QFG5RZZKJD"
  apiKey: "AIzaSyBw2qEPNO_XlwRhK9HvN_9IKuL6OrcMI-0",
  authDomain: "smart-waterbottle-439ba.firebaseapp.com",
  projectId: "smart-waterbottle-439ba",
  storageBucket: "smart-waterbottle-439ba.appspot.com",
  messagingSenderId: "691403804891",
  appId: "1:691403804891:web:cddd321465977b3ccc3cfe",
  measurementId: "G-QVXGK8GVBR"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Get Firebase auth service
const auth = getAuth(firebase);
// Initialize Firebase


export default {firebase , auth };
