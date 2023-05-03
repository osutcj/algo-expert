import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAPq4Lduby8vzEkGh8DNWIrlqcMIsOYYz4',
  authDomain: 'algo-expert-osut.firebaseapp.com',
  projectId: 'algo-expert-osut',
  storageBucket: 'algo-expert-osut.appspot.com',
  messagingSenderId: '114087459996',
  appId: '1:114087459996:web:ce71d91ae682e751d64159',
  measurementId: 'G-GJ2VSKCW4W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
