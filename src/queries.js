
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "olympus-e48a0.firebaseapp.com",
  projectId: "olympus-e48a0",
  storageBucket: "olympus-e48a0.appspot.com",
  messagingSenderId: "649557284069",
  appId: "1:649557284069:web:57d2e9ff8d1103609b700c",
  measurementId: "G-NHXBDYVBG5"
};
// init firebase app
initializeApp(firebaseConfig)

//init services

const db = getFirestore()

// collection rf
const colRef = collection(db,'Locations');

// get collection data

getDocs(colRef)
  .then((snapshot) => {
    let locations = [];
    snapshot.docs.forEach((doc) => {
      locations.push({ ...doc.data(), id: doc.id })
    });
    for(var i = 0; locations.length>= i; i++){
      console.log(locations[i]);
      console.log(locations[i].GPS._long);
    }
  })
  .catch( err => {
    console.log(err.message);
  });


  