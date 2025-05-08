import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPEEpGK9J2Bi38OlGC8FmwXqiD2-2moDw",
    authDomain: "linkedin-clone2-84db0.firebaseapp.com",
    projectId: "linkedin-clone2-84db0",
    storageBucket: "linkedin-clone2-84db0.firebasestorage.app",
    messagingSenderId: "26318654336",
    appId: "1:26318654336:web:4d02326cc03fc8532b4f65",
    measurementId: "G-6XM43289QG"
  };
  const  firebaseApp  = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export default firebaseApp;
  export{db,auth};
