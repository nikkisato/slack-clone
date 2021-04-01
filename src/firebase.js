import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCf9oQvZTpQ6VhfuQljw9vRBDgNxJ-h9yQ',
  authDomain: 'slack-clone-f7d82.firebaseapp.com',
  projectId: 'slack-clone-f7d82',
  storageBucket: 'slack-clone-f7d82.appspot.com',
  messagingSenderId: '110631662692',
  appId: '1:110631662692:web:7e58aa9fa90ee9b5191b71',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
