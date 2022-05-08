import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAuI1w5O_zAuRV-3jfm3nWyX2QVeughvzU',
  authDomain: 'miniblog-react.firebaseapp.com',
  projectId: 'miniblog-react',
  storageBucket: 'miniblog-react.appspot.com',
  messagingSenderId: '1094772666432',
  appId: '1:1094772666432:web:3f963f7102389b34152fa5',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
