import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCpfSKcBVJDFrZGVKV8LhuQJybJuO4ohx8",
  authDomain: "planning-poker-cca59.firebaseapp.com",
  projectId: "planning-poker-cca59",
  storageBucket: "planning-poker-cca59.appspot.com",
  messagingSenderId: "660228940245",
  appId: "1:660228940245:web:11b0f8a86cc81a42f6dd5c",
  measurementId: "G-3W5EFRELZ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export default { db }