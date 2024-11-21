import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBYTeM84x71LjRl3-a8TIOHX1tlyiy_5ik',
  authDomain: 'stavehumle.firebaseapp.com',
  databaseURL:
    'https://stavehumle-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'stavehumle',
  storageBucket: 'stavehumle.appspot.com',
  messagingSenderId: '852736381893',
  appId: '1:852736381893:web:be9b224f46ba1ed92871ac',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
