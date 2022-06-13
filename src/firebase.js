// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_teS9K8qX7YgDzsEBzHY-2ab9bI42yu8',
  authDomain: 'challenge-b18c3.firebaseapp.com',
  projectId: 'challenge-b18c3',
  storageBucket: 'challenge-b18c3.appspot.com',
  messagingSenderId: '531839459162',
  appId: '1:531839459162:web:e4d3791a26c27a50305d63',
  measurementId: 'G-6CQ27D8J89',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
